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
// const getReserveByID = (req,res)=>{
//   const targetReserve = await db.Reserve.findOne({where:{id:id.params.id}, attributes:["date","time", "number_guest", "reserve_code","note_comment","user_id","partner_id"]});
//   if(targetReserve && targetReserve.partner_id === req.partner.id){

//   }
// }
const deleteReserve = async (req, res) => {
  const reserveId = req.params.id;
  await db.Reserve.destroy({ where: { id: reserveId, user_id: req.user.id } });
  res.status(204).send();
};

const getReserveByID =async (req, res) => {
  const targetReserve = await db.Reserve.findAll({ where: { partner_id: req.user.id}, attributes: ["id","date", "time", "number_guest","reserve_status", "reserve_code", "note_comment", "user_id", "partner_id"]});
  if (targetReserve) {
    res.status(200).send(targetReserve);
  }else{
    res.status(404).send({ message: "Target not found!!!" });
  }
};

const changeReserveStatus =async (req, res) => {
  const targetReserve = await db.Reserve.findOne({ where: { id: req.params.id } });
  if (targetReserve && targetReserve.id === req.user.id) {
    await targetReserve.update({ task: req.body.reserve_status});
    res.status(200).send({ message: "Already updated" });
  } else {
    res.status(404).send({ message: "Not found" });
  }
};

module.exports = {
  createReserve,
  deleteReserve,
  getReserveByID,
  changeReserveStatus
};