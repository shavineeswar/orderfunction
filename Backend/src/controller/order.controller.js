
const order = require('../model/order.model');


const Createorder = async (req, res) => {
    if (req.body) {
        const Order = new order(req.body);
        await Order.save()
          .then(data => {
              res.status(200).send({status:'Delivery details saved successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}


module.exports = {
    Createorder,
}