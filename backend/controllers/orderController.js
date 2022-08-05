import Order from "../models/orderModel.js";

const saveOrder = async (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let address = req.body.address;
  let payment = req.body.payment;
  let calendar_id = req.body.calendar_id;

  if (!firstName || !lastName || !address || !payment || !calendar_id) {
    res.status(400).json({error: "please add all fields name, email, and password"});
  }

  const newOrder = await Order.create({
    firstName,
    lastName,
    address,
    payment, 
    calendar_id
  });

  if (newOrder) {
    res.status(201).json({
      _id: newOrder.id,
      firstName: newOrder.firstName,
      lastName: newOrder.lastName,
      address: newOrder.address,
      payment: newOrder.payment,
      calendar_id: newOrder.calendar_id
    });
  } else {
    res.status(400).json({error: "problem with creating order"});
  }
};

export { saveOrder };