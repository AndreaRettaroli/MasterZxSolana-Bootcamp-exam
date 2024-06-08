import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

import wallet from "../wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", "finalized");

/*
    requestAirdrop:

    requestAirdrop(
        to: PublicKey, 
        lamports: number
    ): Promise<TransactionSignature>;

    - to: Indirizzo del wallet a cui inviare i fondi
    - lamports: Quantità di SOL richiesta (1 SOL = 1_000_000_000 LAMPORTS)

*/

(async () => {
  try {
    const airdropSignature = await connection.requestAirdrop(
      keypair.publicKey,
      1 * LAMPORTS_PER_SOL
    );

    console.log(
      `Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`
    );
  } catch (error) {
    console.error(error);
  }
})();

/* 
    
    Siccome abbiamo settato il nostro package.json con uno script che esegue il comando "ts-node", possiamo eseguire il nostro script con il comando "yarn airdrop" 

    Ricordati di non spammare la richiesta di airdrop, altrimenti verrai limitato dal cluster di devnet di Solana (puoi avere massimo 2 SOL per richiedere un altro airdrop)
    Se hai bisogno di più fondi, utilizza la faucet di Solana: https://faucet.solana.com/

*/
