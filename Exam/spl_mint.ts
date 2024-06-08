import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

import wallet from "../wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
//8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE created via yarn createMint
const mint = new PublicKey("8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE");

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    keypair.publicKey
  );

  const ata = tokenAccount.address;
  console.log("Associated Token Account: ", ata.toBase58());

  const amount = 10e6;

  await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);

  console.log("Minted", amount, "to", ata.toBase58());
})();
