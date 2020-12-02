const db = require("../models");

const createReserve = async (req, res) => {
  try {
    const { date, time, number_guest, reserve_code, note_comment, review_star, review, reserve_status } = req.body;
    const { id } = req.params;
    const newReserve = await db.Reserve.create({
      date,
      time,
      number_guest,
      reserve_code,
      note_comment,
      review_star,
      review,
      reserve_status,
      user_id: req.user.id,
      partner_id: id
    });
    res.status(201).send(newReserve);
  } catch (err) {
    console.log(err);
    res.status(500).send({ messages: err.message })
  }
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

module.exports = {
  createReserve,
  deleteReserve
};