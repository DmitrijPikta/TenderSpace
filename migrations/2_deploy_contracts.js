const TenderSpace = artifacts.require("TenderSpace");

module.exports = function (deployer) {
    // Deploy TenderSpace with tender fee (in wei, e.g., 0.1 ETH = 100000000000000000)
    deployer.deploy(TenderSpace, "100000000000000000"); // 0.1 ETH fee
}