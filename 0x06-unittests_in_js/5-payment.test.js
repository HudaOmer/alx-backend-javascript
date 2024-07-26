const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("SetUp Spy to use for each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("Restore Spy after each test", function() {
	console.log.restore();
    });
    it("Check that console.log is called with the right argument", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("Check that console.log is called with the right argument", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
