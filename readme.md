# Exam track

1️⃣ Start by creating a new wallet
2️⃣ Perform an airdrop to interact with Solana
3️⃣ Create a mint and mint some fungible tokens
4️⃣ To finish, transfer these tokens to a new wallet

# Create wallet

```
yarn keygen
```

and copy the result into a new file called wallet.json

# Airdrop tokens

```
yarn airdrop 2
```

this will add 2 sol in the created wallet

# Create and Mint fungible token

```
yarn createMint
```

and you get back the token address, in my case 8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE

to mint run

```
yarn mintToken
```

and you will get back some information like:

Associated Token Account: E3BCfUZhzCXmk7B5LpAa2h9RnJveUFzzEc6mCC5QzUEF
Minted 10000000 to E3BCfUZhzCXmk7B5LpAa2h9RnJveUFzzEc6mCC5QzUEF

minted token can be found via block explorer

https://explorer.solana.com/address/8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE?cluster=devnet

# Transfer token

```
yarn transferToken
```

this function generate the receiver address, you will get something like:

To: 3dQqHQcAL8MWpk8xiyMhy4c5UZsBJi2LCqSXyF5ZLgK3
Associated Token Account: 68brdLGxRjkJP65uXSixibrjj7HUywb9yqTjW78SvRhn
Amount in ATA: 0
Transferred 1000000 from E3BCfUZhzCXmk7B5LpAa2h9RnJveUFzzEc6mCC5QzUEF to 68brdLGxRjkJP65uXSixibrjj7HUywb9yqTjW78SvRhn

you can find the transferred token here:

to, expected 1 token:
https://explorer.solana.com/address/3dQqHQcAL8MWpk8xiyMhy4c5UZsBJi2LCqSXyF5ZLgK3/tokens?cluster=devnet

base address, remained 9 token:
https://explorer.solana.com/address/9WnpeFACjpBRhcodxXKHgmKEBdvCEppjEgnMCNjqhYaU/tokens?cluster=devnet
