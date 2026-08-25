const hre = require("hardhat");

async function main() {
  console.log("Deploying USB Token contract...");

  const USBToken = await hre.ethers.getContractFactory("USB");
  const usb = await USBToken.deploy();
  await usb.waitForDeployment();

  const address = await usb.getAddress();
  console.log(USB Token deployed successfully to: );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
