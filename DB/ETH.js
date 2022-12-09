const AggregateNamesAndIds = require('../utils/aggregator');

const etheriumMainnet = [
  {
    name: "#priority-0x-quicknode",
    id: "123",
  },
  {
    name: "1inch_TELEGRAM",
    id: "345",
  },
  {
    name: "#priority-amberdata-quicknode",
    id: "234",
  },
  {
    name: "#priority-bitpanda-quicknode",
    id: "345",
  },
  {
    name: "#priority-chainalysis-quicknode",
    id: "234",
  },
  {
    name: "#priority-coherent-quicknode",
    id: "345",
  },
  {
    name: "coinbase_NOT_IN_QN_WORKSPACE",
    id: "345",
  },
  {
    name: "#priority-coindcx-quicknode",
    id: "345",
  },
  {
    name: "#priority-coinfund-quicknode",
    id: "234",
  },
  {
    name: "#priority-dune-quicknode",
    id: "234",
  },
  {
    name: "#priority-elliptic_quicknode",
    id: "345",
  },
  {
    name: "#priority-exodus-quicknode",
    id: "234",
  },
  {
    name: "#priority_firebird_quiknode",
    id: "345",
  },
  {
    name: "#priority-flipsidecrypto-quicknode",
    id: "234",
  },
  {
    name: "#priority-goldsky-quicknode",
    id: "345",
  },
  {
    name: "#priority-hashflow-quicknode",
    id: "234",
  },
  {
    name: "	#priority-kyber-quicknode",
    id: "345",
  },
  {
    name: "#priority-luabase-quicknode",
    id: "234",
  },
  {
    name: "#priority-magic-eden_quicknode",
    id: "345",
  },
  {
    name: "#priority-mnemonic-quicknode",
    id: "234",
  },
  {
    name: "#priority-simplehash-quicknode",
    id: "345",
  },
  {
    name: "#priority-slingshot-quicknode",
    id: "234",
  },
  {
    name: "socket_TELEGRAM",
    id: "345",
  },
  {
    name: "#priority-superform-quicknode",
    id: "345",
  },
  {
    name: "#priority-taxbit-quicknode",
    id: "234",
  },
  {
    name: "#priority-unicrypt-quicknode",
    id: "345",
  },
  {
    name: "#priority-web3auth-quicknode",
    id: "234",
  },
  {
    name: "#priority-zelus-quicknode",
    id: "345",
  },
  {
    name: "#priority-zerohash-quicknode",
    id: "345",
  }
];

let ethChannelIds = [];
let ethChannelNames = [];

AggregateNamesAndIds(etheriumMainnet, ethChannelNames, ethChannelIds);

console.log(ethChannelNames, ethChannelIds);
console.log(`Number of VIPs on eth-mainnet: ${etheriumMainnet.length}`)

module.exports = {
  ethChannelNames, 
  ethChannelIds, 
  etheriumMainnet
};
