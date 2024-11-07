const bankDAO = require("./bankDAO")
const bank = require("./bank")

test("retrieveBalance is called but not executed", ()=>{
    const spy=jest.spyOn(bankDAO, "retrieveBalance");
    spy.mockReturnValue(100);
    const balance = bank.getBalance(12345);
    expect(spy).toHaveBeenCalledWith(12345);
    expect(balance).toBe(100);
});

test()