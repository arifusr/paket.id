
const { v4: uuidv4 } = require('uuid')

module.exports = [{
    connote_id: { type: String, required: true, set:()=>{
      return uuidv4()
    }, default:uuidv4 },
    transaction_id: { type: String, 
      validate: {
        validator: function(v) {
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
        },
        message: props => `${props.value} is not a valid uuid`
      },
      required: true },
    connote_number:{
      type: Number,
      required: true,
      max: 9999999
    }
  }, {
    timestamps: true
  }]