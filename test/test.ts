import * as chai from "chai";

const expect = chai.expect;

describe("TypeScript Environment Template", () => {
    xit("should do nothing", () => {
        // Nothing to do..
    });

    it("should be able to succeed", () => {
        expect([]).to.be.an("array").that.is.empty;
    });

    it("should be able to fail", () => {
        expect(false).to.be.true;
    });
});
