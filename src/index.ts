import * as Request from 'superagent'
import { Options } from './options'

export class MVSD {

    private options: Options

    constructor(host=undefined, port=undefined, protocol=undefined) {
        this.options = new Options(host, port, protocol)
    }

    private getUrl = () => this.options.getUrl()

    private send = (method, params, id = 0) => {
        return new Promise((resolve,reject) => {
            return Request.post(this.getUrl() + '/rpc/v2')
                .send({
                    "id": id,
                    "jsonrpc": "2.0",
                    "method": method,
                    "params": params
                })
                .set('accept', 'json')
                .end((err, response) => {
                    try{
                        response=JSON.parse(response.text)
                    } catch(e){}
                    if(err){
                        reject(Error(err.message))
                    }
                    else if (response.error!=undefined)
                        reject({ id: id, name: response.error.code, message: response.error.message })
                    else {
                        response.result.request_id = response.id
                        resolve(response.result)
                    }
                });
        })
    }

    getblockheader = (id = undefined) => this.send('getblockheader', [], id)
    fetch_header = this.getblockheader
    getbestblockhash = this.getblockheader
    getbestblockheader = this.getblockheader

    getblock = (hash, id = undefined) => this.send('getblock', [hash])

}
