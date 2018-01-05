var chai = require("chai"),
    chaiAsPromised = require("chai-as-promised"),
    should = chai.should(),
    expect = chai.expect,
    MVSD = new(require('../dist').MVSD)();

chai.use(chaiAsPromised);

describe('Block functions', function() {
    describe('getblockheader', function() {

        var promise = MVSD.getblockheader();

        it('correct result', () => {
            return Promise.all([
                promise.should.eventually.have.property('bits'),
                promise.should.eventually.have.property('hash')
            ]);
        });

    });
    describe('getblock', function() {
        it('correct result', () => {
            var promise = MVSD.getblock("32cbb475bf081d40f8b64af5571f3fbb19a7bc88fc8dc199bc17c59805ddbb95");
            return Promise.all([
                promise.should.eventually.have.property('header'),
                promise.should.eventually.have.property('txs')
            ]);
        });
        it('missing block error', () => {
            var promise = MVSD.getblock("32cbb475bf081d40f8b64af5571f3fbb19a7bc88fc8dc199bc17c59805ddbb96");
            return promise.should.eventually.be.rejected;
        });

    });
});
