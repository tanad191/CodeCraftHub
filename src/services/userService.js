const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Function to register a new user
exports.registerUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    return await newUser.save();
};

// Function to find a user by email
exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Function to compare passwords
exports.comparePasswords = async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};