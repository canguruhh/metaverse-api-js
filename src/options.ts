export class Options{
    
    protocol: string
    host: string
    port: number

    constructor(private config: any){
        this.protocol=config.protocol
        this.host=config.host
        this.port=config.port
    }

    getProtocol = () => (this.protocol) ? this.protocol : "http"

    getHost = () => (this.host) ? this.host : "127.0.0.1"

    getPort = () => (this.port) ? this.port : 8820

    getUrl = () => this.getProtocol() + "://" + this.getHost() + ":" + this.getPort()

}
