const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const user = new User(req.body);
  const data = await user.save();
  res.json({ message: "User created successfully", data: data });
});

router.get('/', async (req, res) => {
  const data = await User.find();
  res.json({
    message: "Users fetched successfully",
    count: data.length,
    data: data
  });
});

router.get('/:id', async (req, res) => {
  const data = await User.findById(req.params.id);
  res.json({ message: "User found", data: data });
});

router.put('/:id', async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "User updated successfully", data: data });
});

router.delete('/:id', async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully", data: data });
});

module.exports = router;
