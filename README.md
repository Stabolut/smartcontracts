# Stabolut Smart Contracts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.0-blue.svg)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Built%20with-Hardhat-yellow.svg)](https://hardhat.org/)

Smart contracts for the **Stabolut Ecosystem** (USB Token), implementing the **ERC-865 standard** for zero-gas pre-signed meta-transactions on Arbitrum and XDC.

---

## 🌟 Key Features

- **ERC-20 Compliant**: Full balance, transfer, allowance, and event standard compliance.
- **ERC-865 Gasless Meta-Transactions**:
  - `transferPreSigned`: Token holders sign transfers offline; a backend relayer submits the transaction on-chain and collects a small USB fee.
  - `approvePreSigned`: Gasless token spend approvals.
  - `getTransferPreSignedHash`: Helper function to construct EIP-712 compatible signing hashes.
- **Controlled Mint & Burn**: Restricted minting and burning mechanisms for backing and staking reward distributions.

---

## 💻 Prerequisites

- **Node.js**: `>= 18.x` ([nodejs.org](https://nodejs.org/))
- **Testnet ETH / XDC**: For deploying and funding relayer accounts on Arbitrum Sepolia or XDC Apothem.

---

## 🚀 Step-by-Step Setup Guide

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Stabolut/smartcontracts.git
cd smartcontracts
npm install
```

### 2. Compile Contracts

```bash
npx hardhat compile
```

Compilation artifacts and ABIs will be generated in `artifacts/`.

---

## 🚀 Deployment Guide

### Step 1: Configure Deployment Secrets

Create your `.env` file:
```bash
cp .env.example .env
```

Edit `.env` with your deployer private key and RPC URLs:
```ini
PRIVATE_KEY=your_deployer_private_key_without_0x
ARB_RPC_URI=https://sepolia-rollup.arbitrum.io/rpc
XDC_RPC_URI=https://rpc.apothem.network
```

### Step 2: Deploy to Arbitrum Sepolia Testnet

```bash
npm run deploy:arbitrum-sepolia
```

### Step 3: Deploy to XDC Apothem Testnet

```bash
npm run deploy:xdc-apothem
```

After deployment, copy the contract address and update:
1. `mobile/src/common/strings.js` (`contractAddress`)
2. `backend/.env` (`ARB_CONTRACT_ADDRESS` / `XDC_CONTRACT_ADDRESS`)

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for testing and development guidelines.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
