export class Options{
    
    constructor(private host, private port, private protocol){
    }

    getProtocol = () => (this.protocol) ? this.protocol : "http"

    getHost = () => (this.host) ? this.host : "127.0.0.1"

    getPort = () => (this.port) ? this.port : 8820

    getUrl = () => this.getProtocol() + "://" + this.getHost() + ":" + this.getPort()

}
