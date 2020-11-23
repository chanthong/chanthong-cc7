const db = require("../models");

const createReserve = async (req, res) => {
  const { reserve, reserveId } = req.body;
  const newReserve = await db.Reserve.create({ reserve, reserve_id: reserveId, user_id: req.user.id });
  res.status(201).send(newReserve);
};

const deleteReserve = async (req, res) => {
  const reserveId = req.params.id;
  await db.Reserve.destroy({ where: { id: reserveId, user_id: req.user.id } });
  res.status(204).send();
};

module.exports = {
  createReserve,
  deleteReserve
};