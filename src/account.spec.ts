import { MVSD } from './index';
import * as chai from 'chai';
import { expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

before((done) => {
    chai.should();
    chai.use(chaiAsPromised);
    done()
});

describe('Account functions', () => {

    var mvsd = new MVSD(
        (process.env.HOST) ? process.env.HOST : '127.0.0.1',
        (process.env.PORT) ? process.env.PORT : 8820,
        (process.env.PROTOCOL) ? process.env.PROTOCOL : 'http'
    )

    describe('getnewaccount', function() {
        var username = 'testuser' + (Math.random() * 100000000)
        console.log(username)
        it('create account', () => {
            var response = mvsd.getnewaccount(username, 'testtest')
            return Promise.all([
                    response.should.eventually.have.property('default-address'),
                    response.should.eventually.have.property('mnemonic')
            ])
        });
        it('duplicate account', () => {
            return mvsd.getnewaccount(username, 'testtest')
                .should.eventually.be.rejected
        });
        it('chinese language mnemonic account', () => {
            return mvsd.getnewaccount(username+'ch', 'testtest', 'zh_Hans')
                .should.eventually.have.property('mnemonic')
        });
    });
});
