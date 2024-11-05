const isValidatePassword = require("./passwordValidator")

test("Password's length is validate", ()=>{
    expect(isValidatePassword("asdfrptmtt23")).toBe(true);
    expect(isValidatePassword("zef3")).toBe(false);
});

test("Password contains a digit", ()=>{
    expect(isValidatePassword("asdfrpt4m3tt")).toBe(true);
    expect(isValidatePassword("zefrhrhrth")).toBe(false);
});