const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    const { username, password, restaurant_name, phone_no, email, 
        price_range, location, partner_picture } = req.body;
    console.log(req.body);
    const targetPartner = await db.User.findOne({ where: { username } });
  
    if (targetPartner) {
      res.status(400).send({ message: "Username already taken." });
    } else {
      await db.User.create({
        username,
        password: hashedPW,
        restaurant_name, 
        phone_no,
        email,
        price_range,
        location, 
        partner_picture
      });
  
      res.status(201).send({ message: "Partner created." });
    }
  };

  module.exports = {
    register
  };
