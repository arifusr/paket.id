const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = [{
    customer_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        uppercase: true
      },
    customer_address:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        uppercase: true
    },
    customer_email:{
        type: String,
        validate:{
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
              },
              message: props => `${props.value} is not a valid email`
        },
        required: true
    },
    customer_phone:{
        type: String,
        validate:{
            validator: function(v) {
                if(v === null || v === undefined) return true
                return /^([0-9]|-){4,11}/.test(v);
              },
              message: props => `${props.value} is not a valid phone number, example 024-1234567`
        },
        maxlength:11,
        default: null
    },
    customer_address_detail:{
        type: String,
        maxlength: 100,
        default:""
    },
    customer_zip_code:{
        type: String,
        validate:{
          validator: function(v) {
            return /^[0-9]+$/.test(v);
          },
          message: props => `${props.value} is not a valid zip code`
        },
        minlength:5,
        maxlength: 5
    },
    zone_code:{
        type: String,
        enum: ['CGKFT','SMG', 'BDG'],
        required: true
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
  }, {
    _id : false,
  }]