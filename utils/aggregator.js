function AggregateNamesAndIds(chainOrUser, nameArr, idArr) {
    chainOrUser.forEach(e => {
        let names = nameArr.push(e.name);
        let ids = idArr.push(e.id);  
    });
    return nameArr, idArr
}

module.exports = AggregateNamesAndIds;