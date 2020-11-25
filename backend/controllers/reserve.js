const db = require("../models");

const createReserve = async (req, res) => {
  try {
    const { date, time, number_guest, reserve_code, note_comment, review_star, review, reserves_status } = req.body;
    const { id } = req.params;
    const newReserve = await db.Reserve.create({
      date,
      time,
      number_guest,
      reserve_code,
      note_comment,
      review_star,
      review,
      reserves_status,
      user_id: req.user.id,
      partner_id: id
    });
    res.status(201).send(newReserve);
  } catch (err) {
    res.status(500).send({ messages: err.messages })
  }
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