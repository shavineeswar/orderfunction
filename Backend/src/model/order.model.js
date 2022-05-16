const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    Recipient_firstname: {type: "string", required: true},
    Recipient_lastname: {type: "string", required: true },
    Recipient_addressline1:{type: "string", required: true},
    Recipient_city: { type: "string", required: true},
    Recipient_addressline2: { type: "string", required: true},
    Recipient_mobile_no: { type: "string", required: true },
    Nearest_Delivery: { type: "string", required: true, trim: true },
    Location_type: { type: "string", required: true },
    delivery_instructions: { type: "string"},
    your_phone: { type: "string", required: true },
    your_email: { type: "string", required: true }
});




const order = mongoose.model('order', Order);

module.exports = order;