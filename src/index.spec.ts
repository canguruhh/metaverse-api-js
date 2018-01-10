import { MVSD } from './index';
import * as chai from 'chai';
import {expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

before((done) => {
    chai.should();
    chai.use(chaiAsPromised);
    done()
});

describe('Block functions', () => {

    var mvsd = new MVSD(
        (process.env.HOST) ? process.env.HOST : '127.0.0.1',
        (process.env.PORT) ? process.env.PORT : 8820,
        (process.env.PROTOCOL) ? process.env.PROTOCOL : 'http'
    )
    var mvsd_broken = new MVSD(
        '127.0.0.1',
        8,
        (process.env.PROTOCOL) ? process.env.PROTOCOL : 'http',
    )


    describe('getblockheader', function() {
        it('correct result', () => {
            return mvsd.getblockheader()
                .then((result) => {
                    if (result.hash)
                        return true
                    else
                        return false
                })
                .should.eventually.be.true
        });
        it('check for refused connection', () => {
            return mvsd_broken.getblockheader()
                .should.eventually.be.rejected
        });
    });

    describe('getblock', function() {
        it('correct result', () => {
            var promise = mvsd.getblock("32cbb475bf081d40f8b64af5571f3fbb19a7bc88fc8dc199bc17c59805ddbb95");
            return Promise.all([
                promise.should.eventually.have.property('header'),
                promise.should.eventually.have.property('txs')
            ]);
        });
        it('missing block error', () => {
            var promise = mvsd.getblock("32cbb475bf081d40f8b64af5571f3fbb19a7bc88fc8dc199bc17c59805ddbb96");
            return promise.should.eventually.be.rejected;
        });

    });
});
