const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    },
    surcharge_amount:{
        type: Number,
        default: null
    },
    actual_weight:{
        required: true,
        type: Number,
        min: 1,
        max: 10
    },
    volume_weight:{
        required: true,
        type: Number,
        min: 1,
        max: 200
    },
    chargeable_weight:{
        required: true,
        type: Number,
        min: 1,
        max: 200
    },
    organization_id:{
        type: Number,
      min:1,
      max:9999999,
      required: true
    },
    location_id:{
      type:  Schema.Types.ObjectId,
      required: true
    },
    connote_total_package:{
        type: String,
        validate: {
            validator: function(v) {
              return /^[0-9]+$/i.test(v);
            },
            message: props => `${props.value} is not a valid connote_total_package`
          },
          minlength: 1,
          maxlength: 7,
          default:"0"

    },
    connote_surcharge_amount:{
        type: String,
        validate: {
            validator: function(v) {
              return /^[0-9]+$/i.test(v);
            },
            message: props => `${props.value} is not a valid connote_surcharge_amount`
          },
          default:"0",
          minlength: 1,
          maxlength: 7
    },
    connote_sla_day:{
        type: String,
        validate: {
            validator: function(v) {
              return /^([0-9]|1[0-9]|3[0-1])$/i.test(v);
            },
            message: props => `${props.value} is not a valid connote_sla_day`
          },
          required:true,
          minlength: 1,
          maxlength: 2
    },
    location_name:{
        type: String,
        maxlength: 25,
        required: true
    },
    location_type:{
        type: String,
        required: true,
        enum: ["HUB", "CENTER", "SUB"]
    },
    id_source_tariff:{
        type:String,
        validate: {
            validator: function(v) {
              return /^[0-9]+$/i.test(v);
            },
            message: props => `${props.value} is not a valid id_source_tariff`
          },
          default:"0",
          minlength: 1,
          maxlength: 7
    },
    pod:{
        type: Number,
        default: null,
        max: 999999
    },
    history:[
        Schema.Types.Mixed
    ]
  }, {
    _id : false,
    timestamps: true
  }]