const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const Dagen = await hre.ethers.getContractFactory("DegenToken");

  // Deploy it
  const dagen = await Dagen.deploy();
  await dagen.waitForDeployment();

  // Display the contract address
  console.log(`DegenToken token deployed to ${dagen.target}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
