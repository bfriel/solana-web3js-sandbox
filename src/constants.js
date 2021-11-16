import EpochInfo from "./web3js-examples/EpochInfo";
import GetBalance from "./web3js-examples/GetBalance";

export const DRAWER_WIDTH = 150;

export const EXAMPLES = [
  {
    title: "Epoch Info",
    path: "epoch-info",
    element: <EpochInfo />
  },
  {
    title: "Get Balance",
    path: "get-balance",
    element: <GetBalance />
  }
];
