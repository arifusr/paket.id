const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid')

module.exports = [{
    koli_length: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    awb_url: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    koli_chargeable_weight: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    koli_width: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    koli_surcharge: [Schema.Types.Mixed],
    koli_height: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    koli_description: {
        type: String,
        maxlength: 100,
        default: ""
    },
    koli_formula_id: {
        type: Number,
        default: null
    },
    connote_id: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
            },
            message: props => `${props.value} is not a valid uuid`
        },
        required: true
    },
    koli_volume: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    koli_weight: {
        type: Number,
        min: 0,
        max: 9999999,
        default: 0
    },
    koli_id: {
        type: String,
        set:function(){
            return uuidv4()
        },
        default: uuidv4
    },
    koli_custom_field:{
        type:Object,
        default:{}
    },
    koli_code: {
        type: String,
        maxlength:20,
        required: true
    },
}, {
    _id: false,
    timestamps: true
}]