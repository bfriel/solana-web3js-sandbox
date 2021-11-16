import { useEffect, useState } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

export default function EpochInfo() {
  const [connection, setConnection] = useState(null);
  const [epochInfo, setEpochInfo] = useState(null);

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl("mainnet-beta")));
  }, []);

  useEffect(() => {
    async function getEpochInfo() {
      if (connection) {
        try {
          const info = await connection.getEpochInfo();
          setEpochInfo(info);
        } catch (error) {
          console.log("getEpochInfo error: ", error);
        }
      }
    }

    getEpochInfo();
    const interval = setInterval(() => getEpochInfo(), 5000);
    return () => clearInterval(interval);
  }, [connection]);

  return (
    <div>
      <h2>Epoch Info</h2>
      <ul>
        <li>{`Epoch: ${epochInfo?.epoch.toLocaleString("en-US") || "..."}`}</li>
        <li>{`Absolute Slot: ${
          epochInfo?.absoluteSlot.toLocaleString("en-US") || "..."
        }`}</li>
        <li>{`Slots in Epoch: ${
          epochInfo?.slotsInEpoch.toLocaleString("en-US") || "..."
        }`}</li>
        <li>{`Slot Index: ${
          epochInfo?.slotIndex.toLocaleString("en-US") || "..."
        }`}</li>
        <li>{`Block Height: ${
          epochInfo?.blockHeight.toLocaleString("en-US") || "..."
        }`}</li>
        <li>{`Transaction Count: ${
          epochInfo?.transactionCount.toLocaleString("en-US") || "..."
        }`}</li>
      </ul>
    </div>
  );
}
