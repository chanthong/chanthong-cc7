const e = require("express");
const db = require("../models");

const createReserve = async (req, res) => {
  try {
    const { date, time, number_guest, reserve_code, note_comment, review_star, review } = req.body;
    const { id } = req.params;
    const targetPartner = await db.Partner.findOne({ where: { id } })
    console.log(targetPartner);
    console.log(targetPartner.id);
    if (targetPartner) {
      if (Number(targetPartner.max_reserve) >= Number(number_guest)) {
        const newReserve = await db.Reserve.create({
          date,
          time,
          number_guest,
          reserve_code,
          note_comment,
          review_star,
          review,
          reserve_status: "CONFIRM",
          user_id: req.user.id,
          partner_id: id,
        });

        res.status(201).send(newReserve);
      } else {
        const newReservePending = await db.Reserve.create({
          date,
          time,
          number_guest,
          reserve_code,
          note_comment,
          review_star,
          review,
          reserve_status: "PENDING",
          user_id: req.user.id,
          partner_id: id,
        })
        res.status(200).send({ message: "Create reserve status: PENDING" })
      }
    };
  } catch (err) {
    console.log(err);
    res.status(500).send({ messages: err.message });
  };
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