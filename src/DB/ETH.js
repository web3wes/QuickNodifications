const AggregateNamesAndIds = require('../../utils/aggregator');

const ETH = [
  {
    name: "test",
    id: "123",
  },
  {
    name: "test1",
    id: "234",
  },
  {
    name: "test2",
    id: "345",
  },
];

let ethChannelIds = [];
let ethChannelNames = [];

AggregateNamesAndIds(ETH, ethChannelNames, ethChannelIds);
console.log(ethChannelNames, ethChannelIds);

module.exports = {
  ethChannelNames, 
  ethChannelIds, 
  ETH
};
