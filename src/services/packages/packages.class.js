const { Service } = require('feathers-mongoose');
const { v4: uuidv4 } = require('uuid')

exports.Packages = class Packages extends Service {
  setup(app) {
    this.app = app;
  }
  
  async create(data, params){
    //generate transaction id
    let transaction_id = uuidv4()
    let connote_id =  uuidv4()
    data.connote = { ...data.connote, connote_id, transaction_id }
    data.koli_data = data.koli_data.map(k=>{
      k = {...k, connote_id}
      return k
    })
    // let connote = await this.app.service('connote').create({...data.connote, transaction_id})
    const result = await super.create({...data, _id: transaction_id, transaction_id, connote_id}, params)
    // const connote = await this.app.service('connote').create({...result.connote, transaction_id})
    return result
  }
  async update(id, data, params){
    data = {...data, transaction_id: id},
    data.connote = { ...data.connote, connote_id:data.connote_id }
    data.koli_data = data.koli_data.map(k=>{
      k = {...k, connote_id: data.connote_id}
      return k
    })
    return super.update(id, data, params)
  }
};
