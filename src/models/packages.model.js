// packages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const connoteSchema = require('../schema/connotes.schema')
const origin_dataSchema = require('../schema/origin_data.schema')
const koliSchema = require('../schema/koli.schema')
const { v4: uuidv4 } = require('uuid');
module.exports = function (app) {
  const modelName = 'packages';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const connote = new Schema(...connoteSchema)
  const origin_data = new Schema(...origin_dataSchema)
  const koli = new Schema(...koliSchema)
  const schema = new Schema({
    _id: {type: String
    },
    customer_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25,
      uppercase: true
    },
    customer_code: {
      type: String,
      validate: {
        validator: function(v) {
          return /^[0-9]+$/i.test(v);
        },
        message: props => `${props.value} is not a valid customer code`
      },
      required: true,
      minlength: 7,
      maxlength: 7,
    },
    transaction_amount:{
      type: String,
      validate: {
        validator: function(v) {
          return /^[0-9]+$/i.test(v);
        },
        message: props => `${props.value} is not a valid transaction amount`
      },
      required: true,
      minlength: 1,
      maxlength: 10,
    },
    transaction_discount:{
      type: String,
      validate: {
        validator: function(v) {
          return /^[0-9]+$/i.test(v);
        },
        message: props => `${props.value} is not a valid transaction discount`
      },
      minlength: 1,
      maxlength: 10,
      default: 0
    },
    transaction_additional_field:{
      type: String,
      maxlength: 25,
      default: ""
    },
    transaction_payment_type:{
      type: String,
      maxlength: 2,
      required: true,
    },
    transaction_state:{
      type: String,
      enum: ['PAID','PENDING', 'CANCEL'],
      required: true,
    },
    transaction_code:{
      type: String,
      uppercase:true,
      required: true,
      minlength: 16,
      maxlength: 16
    },
    transaction_order:{
      type: Number,
      min:1,
      max:9999999,
      required: true
    },
    location_id:{
      type:  Schema.Types.ObjectId,
      required: true
    },
    organization_id:{
      type: Number,
      min:1,
      max:9999999,
      required: true
    },
    transaction_payment_type_name:{
      type: String,
      minlength: 3,
      maxlength: 10,
      required: true,
    },
    transaction_cash_amount:{
      type: Number,
      max:9999999,
      default:0
    },
    transaction_cash_change:{
      type: Number,
      max:9999999,
      default:0
    },
    customer_attribute:{
      Nama_Sales:{
        type: String,
        minlength: 3,
        maxlength: 25,
        required: true
      },
      TOP:{
        type: String
      },
      Jenis_Pelanggan:{
        type: String,
      },
      connote_id:{
        type:  Schema.Types.ObjectId,
        ref: 'connotes'
      },
    },
    connote:{
      type: connote,
      required: true
    },
    connote_id:{ type: String, 
      validate: {
        validator: function(v) {
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
        },
        message: props => `${props.value} is not a valid uuid`
      },
      required: true },
    origin_data:{
      type: origin_data,
      required: true
    },
    destination_data:{
      type: origin_data,
      required: true
    },
    koli_data:{
      type:[{
        type: koli
      }],
      required: true,
      validate: {
        validator: function(v) {
          if(v.length < 1){
            return false
          }
          return true
        },
        message: props => `${props.value} is not a valid koli data`
      }
    },
    custom_field:{
      type: Object,
      default:{}
    },
    currentLocation:{
      name:{
        type:String,
        required: true,
        maxlength: 100
      },
      code:{
        type:String,
        maxlength: 10,
        uppercase: true,
        required: true
      },
      type:{
        type: String,
        required: true,
        maxlength: 10

      }
      
    }
  }, {
    idAttribute: "transaction_id",
    timestamps: {
      createdAt : "created_at",
      updatedAt : "updated_at"
    },
    versionKey: false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
