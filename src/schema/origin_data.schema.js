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
                return /^([0-9]|-){4,11}/.test(v);
              },
              message: props => `${props.value} is not a valid phone number, example 024-1234567`
        },
        maxlength:11,
        default: ""
    }
  }, {
    _id : false,
  }]