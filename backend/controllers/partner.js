const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
  try {

    const { username, password, restaurant_name, phone_number, email_address,
      price_range, location, partners_picture } = req.body;
    console.log(req.body);
    const targetPartner = await db.Partner.findOne({ where: { username } });

    if (targetPartner) {
      res.status(400).send({ message: "Username already taken." });
    } else {
      const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
      const hashedPW = bcrypt.hashSync(password, salt);

      await db.Partner.create({
        username,
        password: hashedPW,
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
    res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const targetPartner = await db.Partner.findOne({ where: { username } });
    if (targetPartner) {
      if (bcrypt.compareSync(password, targetPartner.password)) {
        const token = jwt.sign({ id: targetPartner.id }, process.env.SECRET, { expiresIn: 3600 });
        res.status(200).send({ token });
      } else {
        res.status(400).send({ message: "Username or password incorrect." });
      }
    } else {
      res.status(400).send({ message: "Username or password incorrect." });
    }
  } catch (err) {
    res.status(500).send({ messages: err.message });
  }
};

const getPartnerById = async (req, res) => {

}

module.exports = {
  register,
  login
};
