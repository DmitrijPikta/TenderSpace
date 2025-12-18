# Terden Space Smart Contract
## Idea
Smart contract that implements tender space platform work: give space for tender creators to create tenders and for another users to participate in tenders.  
## Smart Contract Logic
<img width="761" height="801" alt="SequenceDiagram drawio" src="https://github.com/user-attachments/assets/0e4352d7-ec54-4512-ab16-90eaea726828" />

1. Smart contract deploys by TenderSpace owner. When owner deploys smart contract, he can specify TenderFee that would payout to owner from each tender.
2. After smart contract is deployed, each user can create tender. For it user specify tender details (title, description, MaxParticipantNumber and Reward) and also need to pay TenderFee and specifyed Reward. When tender is created TenderFee paydouts to TenderSpace owner.
3. After tender is created and before is released tender owner can add commition participants, which after would vote for winner. Tender owner do not obligated to do that.
4. Tender owner release tender.
5. After tender is released, other users, that are not tender owner and tender commition participants, can participate in tender by adding offers. Offers would be accepted untill CurrentParticipantNumber equal MaxParticipantNumber.
6. After CurrentParticipantNumber equal MaxParticipantNumber commition participants and tender owner can get all offers.
7. After CurrentParticipantNumber equal MaxParticipantNumber commition participants and tender owner can vote. For commition participants voting is mandatory, for tender owner optional.
8. After all commition participants have voted, tender owner can find winner. Winner would be find, write to tender info and would get reward.
9. After winner is find, tender owner can get its address and offer.

## Stages of work
1. Created Solidity smart contract in Remix
<img width="730" height="604" alt="image" src="https://github.com/user-attachments/assets/71e51646-0c39-4c11-8107-1b3621954e8a" />

3. Deployed smart contract on Ganashe local blockchain using truffle IDE.
<img width="1173" height="299" alt="Screenshot 2025-12-18 142005" src="https://github.com/user-attachments/assets/a07a3a5f-392f-4e0b-8961-7a69479131c0" />

4. Created simple UI for smart contract
<img width="1169" height="417" alt="image" src="https://github.com/user-attachments/assets/6e9c3413-346d-4d61-83fc-7999c9329f5b" />

5. Deployed smart contract on Sepolia test network using MetaMask
<img width="346" height="145" alt="image" src="https://github.com/user-attachments/assets/ea8c100d-dd8a-491d-b701-ee26fac93975" />

6. Viewing transactions in Sepolia EtherScan
<img width="1347" height="139" alt="image" src="https://github.com/user-attachments/assets/8e287533-4957-4b12-b32a-c3c1210833b3" />


