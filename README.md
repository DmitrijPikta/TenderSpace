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
