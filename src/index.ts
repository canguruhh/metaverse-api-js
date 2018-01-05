import * as Request from 'request-promise'
import { Options } from './options'

export class MVSD {

    private options: Options

    constructor(config: any = {}) {
        this.options = new Options(config)
    }

    private getUrl = () => this.options.getUrl()

    private send = (method, params, id=0) => {
        return Request({
            "uri": this.getUrl() + '/rpc/v2',
            "method": 'POST',
            "body": {
                "id": id,
                "jsonrpc": "2.0",
                "method": method,
                "params": params
            },
            "json": true
        })
            .then((response) => {
                if (response.error)
                    throw { id: id, name: response.error.code, message: response.error.message }
                else {
                    response.result.request_id = response.id
                    return response.result
                }
            })
    }

    getblockheader = (id=undefined) => this.send('getblockheader', [], id)
    fetch_header = this.getblockheader
    getbestblockhash = this.getblockheader
    getbestblockheader = this.getblockheader

    getblock = (hash, id=undefined) => this.send('getblock',[hash])

}
