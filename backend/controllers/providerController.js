const Provider = require('../models/providerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const asyncHandler = require('express-async-handler');
const e = require('express');

// @desc register new provider
// @route POST /api/providers
// @access Public
const registerProvider = asyncHandler( async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  if (!name || !email || !password){
    res.status(400);
    throw new Error('please add all fields name, email, and password');
  }

  const providerExist = await Provider.findOne({email});

  if (providerExist){
    res.status(400);
    throw new Error('provider already exists');
  }
  
  const salt = await bcrypt.genSalt(10);
  const saltedhash = await bcrypt.hash(password, salt);


  const provider = await Provider.create({
    name, email, password: saltedhash
  })

  if (provider){
    res.status(201).json({
      _id: provider.id,
      name: provider.name,
      email: provider.email, 
      token: generateToken(provider._id)
    })
  } else {
    res.status(400);
    throw new Error('problem with creating provider (invalid provider data)');
  }
})

// @desc login/authenticate provider
// @route POST /api/providers/login
// @access Public
const loginProvider = asyncHandler( async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password){
    res.status(400);
    throw new Error('please have all fields filled: name, email, and password');
  }

  const provider = await Provider.findOne({email});

  if (provider && await (bcrypt.compare(password, provider.password))){
    res.json({
      _id: provider.id,
      name: provider.name,
      email: provider.email, 
      token: generateToken(provider._id)
    })
  } else {
    res.status(400);
    throw new Error('login failed, invalid email or password');
  }
})

// @desc get provider data
// @route GET /api/providers/me
// @access Private

// example of protect route, prob should be public
const getProvider = asyncHandler( async (req, res) => {
  let {_id, name, email} = await Provider.findById(req.provider.id); 



  res.status(200).json({
    id: _id, 
    name,
    email
  });
})


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {expiresIn:'1d'})
}

module.exports = {
  registerProvider, 
  loginProvider, 
  getProvider
}