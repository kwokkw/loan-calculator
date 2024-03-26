describe("calculation", () => {
  it("should calculate the monthly rate correctly", function () {
    expect(3 / 100 / 12).toEqual(0.0025);
  });

  it("should return a result with 2 decimal places", function () {
    const loanObj = {
      amount: 200000,
      years: 30,
      rate: 3,
    };
    expect(calculateMonthlyPayment(loanObj)).toEqual("499.59");
  });

  /// etc
});
