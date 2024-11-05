const isValidatePassword = require("./passwordValidator")

test("Password length is long enough", ()=>{
    expect(isValidatePassword("asdfrptmtt23")).toBe(true);
    expect(isValidatePassword("zef3")).toBe(false);
});

test("Password contains a digit", ()=>{
    expect(isValidatePassword("asdfrpt4m3tt")).toBe(true);
    expect(isValidatePassword("zefrhrhrth")).toBe(false);
});

test("Password contains a letter", ()=>{
    expect(isValidatePassword("asdfrpt4m3tt")).toBe(true);
    expect(isValidatePassword("1234567899")).toBe(false);
});