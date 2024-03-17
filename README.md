# USB Token Smart Contract

## Overview:

ERC-865 is a proposed standard for Ethereum-based tokens that enables users to pay transaction fees using the token itself rather than Ether (ETH). This standard addresses the inconvenience of requiring users to hold ETH solely for transaction fees, making token transactions more seamless and user-friendly.

ERC-865 introduces the concept of "off-chain approvals," where users can sign transactions offline, allowing another party (e.g., a relayer) to submit them to the blockchain on their behalf. This relieves users from the need to maintain a balance of ETH for transaction fees, as the fees can be paid in the native token.
Why ERC-865 in USB Contract:

In the USB token contract, we have chosen to implement the ERC-865 standard to enhance user experience and reduce friction in token transactions. By adopting ERC-865, users can pay transaction fees using USB tokens instead of requiring ETH. This aligns with the purpose of USB tokens and ensures that users can interact with the token ecosystem seamlessly without the need to hold separate ETH for gas fees.

By leveraging ERC-865, we aim to lower the barrier to entry for users and encourage greater adoption of USB tokens by removing the dependency on ETH for transaction fees. This aligns with our commitment to providing a user-friendly and efficient token experience, ultimately enhancing the usability and accessibility of the USB token ecosystem.

Here's a detailed documentation of each method of the main contract:

### Constructor
#### Description:
Initializes the contract with the token symbol, name, and decimal places, and mints an initial supply of tokens to the contract deployer.

### burn
#### Description:
Allows an address to burn a specified amount of their own tokens.

### mint
#### Description:
Allows the contract owner to mint new tokens and assign them to a specified address.

### burnMint
#### Description:
Allows the contract owner to burn tokens from a specified address and mint the same amount of tokens to another address.

### countOf
#### Description:
Returns the count of transactions performed by a specified address.

### transferPreSigned
#### Description:
Allows a user to submit a presigned transfer, transferring tokens from their own address to another address, with the option to pay a fee in tokens to the message sender.

### approvePreSigned
#### Description:
Allows a user to submit a presigned approval, allowing another address to spend tokens on their behalf, with the option to pay a fee in tokens to the message sender.

### increaseAllowancePreSigned
#### Description:
Allows a user to submit a presigned approval to increase the amount of tokens that another address is allowed to spend on their behalf, with the option to pay a fee in tokens to the message sender.

### decreaseAllowancePreSigned
#### Description:
Allows a user to submit a presigned approval to decrease the amount of tokens that another address is allowed to spend on their behalf, with the option to pay a fee in tokens to the message sender.

### transferFromPreSigned
#### Description:
Allows a user to submit a presigned transfer from another address to a specified recipient, with the option to pay a fee in tokens to the message sender.

### getTransferPreSignedHash
#### Description:
Returns the hash of the payload used by the transferPreSigned method.

### validate
#### Description:
Validates a presigned transfer request by returning the hashed parameters, recovered signer address, and hashed transaction.

### getApprovePreSignedHash
#### Description:
Returns the hash of the payload used by the approvePreSigned method.

### getIncreaseAllowancePreSignedHash
#### Description:
Returns the hash of the payload used by the increaseAllowancePreSigned method.

### getDecreaseAllowancePreSignedHash
#### Description:
Returns the hash of the payload used by the decreaseAllowancePreSigned method.

### getTransferFromPreSignedHash
#### Description:
Returns the hash of the payload used by the transferFromPreSigned method.

### getEthSignedHash
#### Description:
Returns the Ethereum signed message hash of the provided hash.

These methods collectively implement ERC865 functionality, allowing users to perform token transfers and approvals without paying gas fees directly in tokens. Additionally, they provide options for users to pay fees to the message sender for facilitating the transactions.
