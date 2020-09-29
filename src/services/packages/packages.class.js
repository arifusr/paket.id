const { Service } = require('feathers-mongoose');

exports.Packages = class Packages extends Service {
  async find(id,params){
      console.log("a")
      return "a"
  }
};
