const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
   
   const {username, password, name, lname, email, profile_url, birth_day, phone_number, gender} = req.body;
   const targetUser = await db.User.findOne({ where: { username } });
   const phoneNumber = String(phone_number);

   if (targetUser) {
      res.status(400).send({ message: "Username already taken." });
   } else {
      const salt = bcryptjs.genSaltSync(Number(process.env.SALT_ROUND));
      const hashedPwd = bcryptjs.hashSync(password, salt);

      await db.User.create({
         username,
         name,
         lname,
         email,
         gender,
         profile_url,
         phone_number:phoneNumber,
         birth_day,
         password:hashedPwd
      });
      res.status(201).send({ message: "User created." });
   }
};

const login = async (req, res) => {
   const { username, password } = req.body;
   const targetUser = await db.User.findOne({where: { username }});

   if (!targetUser) {
      res.status(400).send({message: "username or password incorrect" });
   } else {
      const isCorrect = bcryptjs.compareSync(password, targetUser.password);
      if (isCorrect) {
         const payLoad = {
            id:targetUser.id,
            name:targetUser.name
         };
         const token = jwt.sign(payLoad, process.env.SECRET, {expiresIn: 3600});
         res.status(200).send({ token });
      } else {
         res.status(400).send({message: "username or password incorrect" });
      }
   }
};

const getAllUsers = async (req, res) => {
   const allUsers = await db.User.findAll();
   res.status(200).send(allUsers);
 };

module.exports = {
   register,
   login,
   getAllUsers
};