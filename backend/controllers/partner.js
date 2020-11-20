const db = require("../models");

const register = async (req, res) => {
    const { username, password, name, profileUrl } = req.body;
    console.log(req.body);
    const targetUser = await db.User.findOne({ where: { username } });
  
    if (targetUser) {
      res.status(400).send({ message: "Username already taken." });
    } else {
      await db.User.create({
        username,
        name,
        password: hashedPW,
        profile_url: profileUrl
      });
  
      res.status(201).send({ message: "Partner created." });
    }
  };