import { Options } from './options';
import { expect } from 'chai';

describe('Config options', () => {
    var options = new Options('127.0.0.1', 8820,  'http' );
    var default_options = new Options();
    describe('getHost', () => {
        it('getHost', () => {
            expect(options.getHost()).to.equal('127.0.0.1');
        });
    });
    describe('default getHost', () => {
        it('getHost', () => {
            expect(default_options.getHost()).to.equal('127.0.0.1');
        });
    });
    it('get protocol', () => {
        expect(options.getProtocol()).to.equal('http');
    });
    it('default get protocol', () => {
        expect(default_options.getProtocol()).to.equal('http');
    });
    it('get port', () => {
        expect(options.getPort()).to.equal(8820);
    });
    it('default get port', () => {
        expect(default_options.getPort()).to.equal(8820);
    });
    it('get url', () => {
        expect(options.getUrl()).to.equal('http://127.0.0.1:8820');
    });
    it('default get url', () => {
        expect(default_options.getUrl()).to.equal('http://127.0.0.1:8820');
    });
});
