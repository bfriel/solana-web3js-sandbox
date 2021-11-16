import { useState, useEffect } from "react";
import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";

export default function GetBalance() {
  const [connection, setConnection] = useState(null);
  const [pubKey, setPubKey] = useState("");
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl("mainnet-beta")));
  }, []);

  useEffect(() => {
    async function getBalance() {
      if (connection && pubKey) {
        try {
          const balance = await connection.getBalance(pubKey);
          setBalance(balance);
        } catch (error) {
          console.log("getBalance error: ", error);
        }
      }
    }

    getBalance();
  }, [connection, pubKey]);

  const handleAddressInput = (event) => {
    const userInput = event.target.value;
    try {
      const pk = new PublicKey(userInput);
      setPubKey(pk);
      setError("");
    } catch (error) {
      console.log("handleAddressInput error: ", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Get Balance</h2>
      <label htmlFor="address">Solana Address: </label>
      <input id="address" onChange={handleAddressInput} />
      {error ? (
        <p>{error}</p>
      ) : pubKey ? (
        <p>{`Balance: ${
          balance / LAMPORTS_PER_SOL
        } SOL (${balance} lamports)`}</p>
      ) : (
        <p>Please enter an address</p>
      )}
    </div>
  );
}
