function retrieveBalance(accountId){
    console.log(`Retrieve balance from bank ${accountId}`);
}

const bankDAO = {
    retrieveBalance
};

module.exports = bankDAO;