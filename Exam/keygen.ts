import { Keypair } from "@solana/web3.js";

/* 

    La Keypair viene interpretata come un interfaccia con le seguenti proprietà:

    interface Signer {
        publicKey: PublicKey;
        secretKey: Uint8Array;
    }

    Publickey è l'indirizzo del wallet, mentre SecretKey è la chiave privata che ci permette di firmare le transazioni.

*/

const keypair = Keypair.generate();

console.log(
  `Hai generato il tuo nuovo wallet: ${keypair.publicKey.toBase58()} \n\n Per salvare il tuo wallet, copia e incolla il seguente JSON in un file: [${
    keypair.secretKey
  }]`
);
