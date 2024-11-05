function isValidatePassword(password){  
    const regex = /\d/;
    return password.length >=8 && regex.test(password);
}

module.exports = isValidatePassword;