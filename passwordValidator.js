function isValidatePassword(password){  
    const regex1 = /\d/;
    const regex2 = /[a-aA-Z]/;
    return password.length >=8 && regex1.test(password) && regex2.test(password);
}

module.exports = isValidatePassword;