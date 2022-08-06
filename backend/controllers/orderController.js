import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//POST /api/orders/save-order
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


//@desc    Get the order detail from calendar_id
//@route   GET /api/orders/calendar/:id
//@access  Public
const getOrderByCalendarId = asyncHandler(async (req, res) => {
  const order = await Order.find({ calendar_id: req.params.id }).select("-address -payment");
  // check if Provider exist
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
    throw new Error('Order not found');
  }
});

export { saveOrder, getOrderByCalendarId };