import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

import wallet from "../wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// result of yarn createMint 8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE
const mint = new PublicKey("8bJY5ihaN8pk2q6tD4DReC9szKd5JNf7mGSQQR6VejvE");
// result of yarn mintToken E3BCfUZhzCXmk7B5LpAa2h9RnJveUFzzEc6mCC5QzUEF
const fromAta = new PublicKey("E3BCfUZhzCXmk7B5LpAa2h9RnJveUFzzEc6mCC5QzUEF");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    to.publicKey
  );

  const toAta = tokenAccount.address;
  console.log("Associated Token Account: ", toAta.toBase58());

  const amountToAta = tokenAccount.amount;
  console.log("Amount in ATA: ", amountToAta.toString());

  const amount = 1e6;

  await transfer(connection, keypair, fromAta, toAta, keypair, amount);

  console.log(
    "Transferred",
    amount,
    "from",
    fromAta.toBase58(),
    "to",
    toAta.toBase58()
  );
})();
