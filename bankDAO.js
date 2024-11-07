function retrieveBalance(accountId){
    console.log(`Retrieve balance from bank ${accountId}`);
}

function debitAccount(accountId, amount){
    console.log(`The account ${accountId} was debited with ${amount}`)
}

const bankDAO = {
    retrieveBalance,
    debitAccount
};

module.exports = bankDAO;