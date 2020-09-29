const { Service } = require('feathers-mongoose');
const { v4: uuidv4 } = require('uuid')

exports.Packages = class Packages extends Service {
  setup(app) {
    this.app = app;
  }
  
  async create(data, params){
    //generate transaction id
    let transaction_id = uuidv4()
    let connote = await this.app.service('connote').create({...data.connote, transaction_id})
    const {connote: conn, ...data1 } = data
    let res = await super.create({...data1, transaction_id, connote_id: connote.connote_id}, params)
    res.connote = connote
    return res
  }
};
