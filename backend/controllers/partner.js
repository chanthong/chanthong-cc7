const db = require("../models");

const register = async (req, res) => {
    try {

        const { username, password, restaurant_name, phone_number, email_address, 
            price_range, location, partners_picture } = req.body;
        console.log(req.body);
        const targetPartner = await db.Partner.findOne({ where: { username } });
      
        if (targetPartner) {
          res.status(400).send({ message: "Username already taken." });
        } else {
          await db.Partner.create({
            username,
            password,
            restaurant_name, 
            phone_number,
            email_address,
            price_range,
            location, 
            partners_picture
          });
          res.status(201).send({ message: "Partner created." });
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
  };

  module.exports = {
    register
  };