const isValidatePassword = require("./passwordValidator")

test("Password's length is validate", ()=>{
    expect(isValidatePassword("asdfrptmtt")).toBe(true);
    expect(isValidatePassword("zef3")).toBe(false);
    expect(isValidatePassword("mdlopfmz")).toBe(true);
});
