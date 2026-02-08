const promisify = require("../callbacks/easy/promisify");

describe("promisify", () => {
  test("resolves with data when callback has no error", async () => {
    const cbFn = (a, b, cb) => {
      setTimeout(() => cb(null, a + b), 10);
    };

    const promisedFn = promisify(cbFn);
    const result = await promisedFn(2, 3);

    expect(result).toBe(5);
  });

  test("rejects when callback receives an error", async () => {
    const cbFn = (_, __, cb) => {
      setTimeout(() => cb("error"), 10);
    };

    const promisedFn = promisify(cbFn);

    await expect(promisedFn(1, 2)).rejects.toBe("error");
  });
});
