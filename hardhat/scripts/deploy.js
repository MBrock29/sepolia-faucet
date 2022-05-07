const { ethers } = require("hardhat");

async function main() {
  const faucetContract = await ethers.getContractFactory("faucet");

  const deployedFaucetContract = await faucetContract.deploy();

  await deployedFaucetContract.deployed();

  console.log("Faucet Contract Address:", deployedFaucetContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
