// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TenderSpace {
    address private tenderSpaceOwner;
    uint public tenderFee;

    struct Participant {
        address itsAddress;
        string offer;
    }

    struct Tender {
        address tenderOwner;
        string title;
        string description;
        uint maxParticipantsNumber;
        //Participant [] participants;
        mapping(uint => Participant) participants;
        uint currentParticipantsNumber;
        mapping(uint => address) commitionParticipants;
        uint commitionParticipantsNumber;
        mapping(address => bool) userVoted;
        uint reward;
        //uint [] votingResults;
        mapping(address => uint) votingResults;
        bool isReleased;
        Participant winner;
    }

    mapping(uint => Tender) Tenders;
    uint public nextTenderIndex = 0;

    constructor(uint _tenderFee) {
        tenderSpaceOwner = msg.sender;
        tenderFee = _tenderFee;
    }

    function createTender(
        string calldata _title,
        string calldata _description,
        uint _maxParticipantsNumber,
        uint _reward
    ) public payable {
        require(
            _maxParticipantsNumber > 0,
            "Max participants number should be more than 0"
        );
        uint requiredAmount = _reward + tenderFee;
        require(msg.value >= requiredAmount, "Not enought ETH sent");

        Tender storage newTender = Tenders[nextTenderIndex++];
        newTender.tenderOwner = msg.sender;
        newTender.title = _title;
        newTender.description = _description;
        newTender.maxParticipantsNumber = _maxParticipantsNumber;
        newTender.reward = _reward;
        newTender.currentParticipantsNumber = 0;
        newTender.commitionParticipantsNumber = 0;
        newTender.isReleased = false;

        (bool feeSuccess, ) = payable(tenderSpaceOwner).call{value: tenderFee}(
            ""
        );
        require(feeSuccess, "ETH fee transfer failed");

        uint refund = msg.value - requiredAmount;
        if (refund > 0) {
            (bool refundSuccess, ) = payable(msg.sender).call{value: refund}(
                ""
            );
            require(refundSuccess, "Refund failed");
        }
    }

    function addCommitionParticipant(
        uint _tenderIndex,
        address _participant
    ) public {
        Tender storage tender = Tenders[_tenderIndex];
        require(
            msg.sender == Tenders[_tenderIndex].tenderOwner,
            "You are not this tender owner"
        );
        require(
            tender.isReleased == false,
            "You can not add commition participants when tender is already released"
        );
        require(
            msg.sender != _participant,
            "Tender owner can not be written like commition participant"
        );
        for (uint i = 0; i < tender.commitionParticipantsNumber; i++) {
            require(
                tender.commitionParticipants[i] != _participant,
                "This address alredy written like commition participant"
            );
        }

        tender.commitionParticipants[
            tender.commitionParticipantsNumber++
        ] = _participant;
    }

    function releaseTender(uint _tenderIndex) public {
        Tender storage tender = Tenders[_tenderIndex];
        require(
            tender.tenderOwner == msg.sender,
            "You are not this tender owner"
        );
        require(tender.isReleased == false, "Tender already released");
        tender.isReleased = true;
    }

    function participate(uint _tenderIndex, string calldata offer) public {
        Tender storage tender = Tenders[_tenderIndex];
        require(tender.isReleased == true, "Tender is not released");
        require(
            tender.tenderOwner != msg.sender,
            "Tender owner can not participate in tender"
        );
        for (uint i = 0; i < tender.commitionParticipantsNumber; i++) {
            require(
                tender.commitionParticipants[i] != msg.sender,
                "Commition participants can not participate in tender"
            );
        }
        require(
            tender.currentParticipantsNumber < tender.maxParticipantsNumber,
            "Participants number is full"
        );

        for (uint i = 0; i < tender.currentParticipantsNumber; i++) {
            require(
                tender.participants[i].itsAddress != msg.sender,
                "One user can not participate two times"
            );
        }

        tender.participants[tender.currentParticipantsNumber++] = Participant(
            msg.sender,
            offer
        );
    }

    function getTenderOffers(
        uint _tenderIndex
    ) public view returns (address[] memory, string[] memory) {
        Tender storage tender = Tenders[_tenderIndex];
        bool validUser = false;

        if (tender.tenderOwner == msg.sender) {
            validUser = true;
        }
        for (uint i = 0; i < tender.commitionParticipantsNumber; i++) {
            if (tender.commitionParticipants[i] == msg.sender) {
                validUser = true;
            }
        }
        require(validUser, "Your are not valid user");
        require(
            tender.currentParticipantsNumber == tender.maxParticipantsNumber,
            "You can not get offers when participates number is not full"
        );

        address[] memory participantsAddresses = new address[](
            tender.currentParticipantsNumber
        );
        string[] memory participantsOffers = new string[](
            tender.currentParticipantsNumber
        );

        for (uint i = 0; i < tender.currentParticipantsNumber; i++) {
            participantsAddresses[i] = tender.participants[i].itsAddress;
            participantsOffers[i] = tender.participants[i].offer;
        }
        return (participantsAddresses, participantsOffers);
    }

    function vote(uint _tenderIndex, address _participantAddress) public {
        Tender storage tender = Tenders[_tenderIndex];
        require(
            tender.winner.itsAddress == address(0),
            "You can not vote when winner is chose"
        );
        require(
            tender.currentParticipantsNumber == tender.maxParticipantsNumber
        );

        //bool userIsTenderOwner = false;
        bool validUser = false;
        if (tender.tenderOwner == msg.sender) {
            validUser = true;
            //userIsTenderOwner = true;
        }
        for (uint i = 0; i < tender.commitionParticipantsNumber; i++) {
            if (tender.commitionParticipants[i] == msg.sender) {
                validUser = true;
            }
        }
        require(validUser, "You are not valid user to vote");

        bool correctParticipantAddress;
        for (uint i = 0; i < tender.currentParticipantsNumber; i++) {
            if (tender.participants[i].itsAddress == _participantAddress) {
                correctParticipantAddress = true;
            }
        }
        require(
            correctParticipantAddress,
            "Where are no such participant in this tender"
        );

        require(!tender.userVoted[msg.sender], "You have already voted");

        tender.votingResults[_participantAddress]++;
        tender.userVoted[msg.sender] = true;
    }

    function findWinner(uint _tenderIndex) public {
        Tender storage tender = Tenders[_tenderIndex];
        require(tender.tenderOwner == msg.sender, "You are not tender owner");

        for (uint i = 0; i < tender.commitionParticipantsNumber; i++) {
            require(
                tender.userVoted[tender.commitionParticipants[i]],
                "Not all commition participants have voted"
            );
        }

        uint maxVotes = 0;
        uint winnerIndex = 0;
        for (uint i = 0; i < tender.currentParticipantsNumber; i++) {
            uint votes = tender.votingResults[
                tender.participants[i].itsAddress
            ];
            if (votes > maxVotes) {
                maxVotes = votes;
                winnerIndex = i;
            }
        }

        tender.winner = tender.participants[winnerIndex];
        require(
            tender.winner.itsAddress != address(0),
            "Error, winner have zero address"
        );

        (bool success, ) = payable(tender.winner.itsAddress).call{
            value: tender.reward
        }("");
        require(success, "ETH transfer failed");
    }

    function getWinner(
        uint _tenderIndex
    ) public view returns (address, string memory) {
        Tender storage tender = Tenders[_tenderIndex];
        require(
            tender.winner.itsAddress != address(0),
            "Winner is not already choosed"
        );
        return (tender.winner.itsAddress, tender.winner.offer);
    }

    function getTenderOwner(uint _tenderIndex) public view returns (address) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].tenderOwner;
    }

    function getTenderTitle(
        uint _tenderIndex
    ) public view returns (string memory) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].title;
    }

    function getTenderDescription(
        uint _tenderIndex
    ) public view returns (string memory) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].description;
    }

    function getTenderReward(uint _tenderIndex) public view returns (uint) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].reward;
    }

    function getTenderMaxParticipantsNumber(
        uint _tenderIndex
    ) public view returns (uint) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].maxParticipantsNumber;
    }

    function getTenderCurrentParticipantsNumber(
        uint _tenderIndex
    ) public view returns (uint) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].currentParticipantsNumber;
    }

    function getIsReleased(uint _tenderIndex) public view returns (bool) {
        require(_tenderIndex < nextTenderIndex, "Tender does not exist");
        return Tenders[_tenderIndex].isReleased;
    }
}
