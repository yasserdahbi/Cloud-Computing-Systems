const bankDAO = require("./bankDAO")
const bankTransfer = require("./bankTransfer")

function getBalance(accountId){
    return bankDAO.retrieveBalance(accountId);
}

async function transferMoney(accountId, amount){ 
    bankTransfer.transfer(accountId, amount)
    .then(()=>{
        bankDAO.debitAccount(accountId, amount);
    })
    .catch((error)=>{
        console.log(error);
    });
}

const bank = {
    getBalance,
    transferMoney
};

module.exports = bank