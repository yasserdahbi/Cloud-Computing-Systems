const bankTransfer = require("./bankTransfer")
const bank = require("./bank");
const bankDAO = require("./bankDAO");

test("Transfer done successfully", async ()=>{
    const spyTransfer=jest.spyOn(bankTransfer, "transfer").mockResolvedValue(null);
    const spyDAO=jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);

    const accountId = 1234;
    const amount = 1000;

    await bank.transferMoney(accountId, amount);

    expect(spyTransfer).toHaveBeenCalledWith(accountId, amount);
    expect(spyDAO).toHaveBeenCalledWith(accountId, amount);

    spyDAO.mockRestore();

});


test("Transfer failed", async ()=>{
    const spyTransfer=jest.spyOn(bankTransfer, "transfer").mockRejectedValue(new Error("Transfer failed"));
    const spyDAO=jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);

    const accountId = 1234;
    const amount = 1000;

    await bank.transferMoney(accountId, amount);

    expect(spyTransfer).toHaveBeenCalledWith(accountId, amount);
    expect(spyDAO).not.toHaveBeenCalledWith(accountId, amount);

});