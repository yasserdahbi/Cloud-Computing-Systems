const bankDAO = require("./bankDAO")

function getBalance(accountId){
    return bankDAO.retrieveBalance(accountId);
}

const bank = {
    getBalance
};

module.exports = bank