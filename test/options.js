var chai = require("chai");
var expect = chai.expect;
var Options = require('../dist/node/options.js').Options;

describe('Connection config', function() {

    let options = new Options({
        host: 'testnet.mvs.org',
        protocol: 'https',
        port: 443
    });

    it('host', () => {
        expect(options.getHost()).to.equal('testnet.mvs.org');
    });
    
    it('protocol', () => {
        expect(options.getProtocol()).to.equal('https');
    });

    it('port', () => {
        expect(options.getPort()).to.equal(443);
    });

    it('url', () => {
        expect(options.getUrl()).to.equal('https://testnet.mvs.org:443');
    });

});
