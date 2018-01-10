import { Options } from './options';
import { expect } from 'chai';

describe('Config options', () => {
    var options = new Options('127.0.0.1', 8820,  'http' );
    describe('getHost', () => {
        it('getHost', () => {
            const result = new Options( '127.0.0.1', 8820, 'http').getHost()
            expect(result).to.equal('127.0.0.1');
        });
    });
    it('get protocol', () => {
        expect(options.getProtocol()).to.equal('http');
    });
    it('get port', () => {
        const result = options.getPort()
        expect(result).to.equal(8820);
    });
});
