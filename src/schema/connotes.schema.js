
const { v4: uuidv4 } = require('uuid')

module.exports = [{
    connote_id: { type: String, 
        validate: {
          validator: function(v) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
          },
          message: props => `${props.value} is not a valid uuid`
        },
        required: true },
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
    },
    connote_service:{
        type: String,
        enum: ["ECO","REG","YES"],
        required: true
    },
    connote_service_price:{
      type: Number,
      required: true,
      max: 9999999
    },
    connote_amount:{
        type: Number,
      required: true,
      max: 9999999
    },
    connote_code:{
        type: String,
      maxlength: 25,
      required: true
    },
    connote_booking_code:{
        type: String,
      maxlength: 25,
      default: ""
    },
    connote_order:{
        type: Number,
      required: true,
      max: 9999999
    },
    connote_state:{
        type: String,
      enum: ['PAID','PENDING', 'CANCEL'],
      required: true,
    },
    connote_state_id:{
        type: Number,
      required: true,
      max: 9999999
    },
    zone_code_from:{
        type: String,
        enum: ['CGKFT','SMG', 'BDG'],
        required: true
    },
    zone_code_to:{
        type: String,
        enum: ['CGKFT','SMG', 'BDG'],
        required: true
    }
  }, {
    _id : false,
    timestamps: true
  }]