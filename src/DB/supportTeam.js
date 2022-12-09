const AggregateNamesAndIds = require('../../utils/aggregator');

const users = [
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  },
  {
    name: "",
    id: "",
  }
];

let userIds = [];
let userNames = [];

AggregateNamesAndIds(users, userNames, userIds);
console.log(userNames, userIds);

module.exports = {
    userNames, 
    userIds, 
    users
};