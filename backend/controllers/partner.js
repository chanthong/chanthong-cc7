const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sequelize } = require("../models");

// Register
const register = async (req, res) => {
  try {
    const { username, password, restaurant_name, phone_number, email_address,
      price_range, partners_picture, address, district, province } = req.body;
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
        address,
        district,
        province,
        partners_picture
      });
      res.status(201).send({ message: "Partner created." });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const targetPartner = await db.Partner.findOne({ where: { username } });
    if (targetPartner) {
      if (bcrypt.compareSync(password, targetPartner.password)) {
        const token = jwt.sign({
          id: targetPartner.id,
          username: targetPartner.username,
          password: targetPartner.password,
          restaurant_name: targetPartner.restaurant_name,
          phone_number: targetPartner.phone_number,
          address: targetPartner.address,
          district: targetPartner.district,
          province: targetPartner.province,
          email_address: targetPartner.email_address,
          price_range: targetPartner.price_range,
          partners_picture: targetPartner.partners_picture
        },
          process.env.SECRET,
          { expiresIn: 3600 }
        );
        res.status(200).send({ token, role: "PARTNER" });
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

// เอาไปใส่หน้า reserve 
const getPartnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const targetPartner = await db.Partner.findOne({ where: { id } });
    console.log(targetPartner.dataValues);
    res.status(200).send({ targetPartner });
  } catch (err) {
    res.status(500).send({ messages: err.message });
  }
};

// เอาไป show หน้าเว็ป ใส่ การ์ด
const getPartners = async (req, res) => {
  try {
    const partners = await db.Partner.findAll({
      include: [{
        model: db.Partner_Category,
        where: { priority: 1 },
        include: {
          model: db.Category,
          attributes: ['type_Restaurant']
        }
      }, {
        model: db.Reserve,
        attributes: ['id']
      }],
    });

    res.status(200).send({ partners });
  } catch (err) {
    console.log(err);
    res.status(500).send({ messages: err.message });
  }
};

// ลบ Partner
const deletePartner = async (req, res) => {
  try {
    const partnerId = req.params.id;
    const targetPartner = await db.Partner.destroy({ where: { id: partnerId } })
    res.status(204).send({ messages: `${targetPartner} has been delete` })
  } catch (err) {
    res.status(500).send({ messages: err.message });
  }
};

//เรียก partner ตาม location
const getPartnersByDistrict = async (req, res) => {
  try {
    const { findDis } = req.params;
    console.log(findDis)
    console.log("come in already");
    const targetPartner = await db.Partner.findAll({
      where: {
        district: findDis
      },
      include: [{
        model: db.Partner_Category,
        where: { priority: 1 },
        include: {
          model: db.Category,
          attributes: ['type_Restaurant']
        }
      }, {
        model: db.Reserve,
        attributes: ['id']
      }]
    });
    res.status(200).send({ targetPartner });
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: err.message })
  }
};

const getPlaceCategory = async (req, res) => {
  try {
    const allPlace = await db.Partner.findAll({
      group: ['district'],
      attributes: ['district', [db.sequelize.fn('COUNT', 'id'), 'qty']]
    });

    res.status(200).send({ allPlace });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  };
};

module.exports = {
  register,
  login,
  getPartnerById,
  getPartners,
  deletePartner,
  getPartnersByDistrict,
  getPlaceCategory
};
