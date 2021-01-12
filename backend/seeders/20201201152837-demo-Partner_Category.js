'use strict';
const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // category
    const thai = await db.Category.findOne({ where: { type_Restaurant: 'thai' } });
    const chinese = await db.Category.findOne({ where: { type_Restaurant: 'chinese' } });
    const japanese = await db.Category.findOne({ where: { type_Restaurant: 'japanese' } });
    const fineDining = await db.Category.findOne({ where: { type_Restaurant: 'fine dining' } });
    const hotCuisine = await db.Category.findOne({ where: { type_Restaurant: 'hot cuisine' } });
    const atTwilight = await db.Category.findOne({ where: { type_Restaurant: 'at twilight' } });
    const buffet = await db.Category.findOne({ where: { type_Restaurant: 'buffet' } });

    //username partner
    const hungry55 = await db.Partner.findOne({ where: { username: 'hungry55' } });
    const GG = await db.Partner.findOne({ where: { username: 'GG' } });
    const FF = await db.Partner.findOne({ where: { username: 'FF' } });
    const DD = await db.Partner.findOne({ where: { username: 'DD' } });
    const SS = await db.Partner.findOne({ where: { username: 'SS' } });
    const AA = await db.Partner.findOne({ where: { username: 'AA' } });
    const QQ = await db.Partner.findOne({ where: { username: 'QQ' } });
    const WW = await db.Partner.findOne({ where: { username: 'WW' } });
    const EE = await db.Partner.findOne({ where: { username: 'EE' } });
    const RR = await db.Partner.findOne({ where: { username: 'RR' } });
    const TT = await db.Partner.findOne({ where: { username: 'TT' } });
    const YY = await db.Partner.findOne({ where: { username: 'YY' } });
    const UU = await db.Partner.findOne({ where: { username: 'UU' } });
    const II = await db.Partner.findOne({ where: { username: 'II' } });
    const OO = await db.Partner.findOne({ where: { username: 'OO' } });
    const PP = await db.Partner.findOne({ where: { username: 'PP' } });
    const ZZ = await db.Partner.findOne({ where: { username: 'ZZ' } });
    const XX = await db.Partner.findOne({ where: { username: 'XX' } });
    const CC = await db.Partner.findOne({ where: { username: 'CC' } });
    const VV = await db.Partner.findOne({ where: { username: 'VV' } });
    const BB = await db.Partner.findOne({ where: { username: 'BB' } });
    const NN = await db.Partner.findOne({ where: { username: 'NN' } });
    const MM = await db.Partner.findOne({ where: { username: 'MM' } });
    const QA = await db.Partner.findOne({ where: { username: 'QA' } });
    const QC = await db.Partner.findOne({ where: { username: 'QC' } });
    
    await queryInterface.bulkInsert('Partner_Category', [{

      category_id: thai.id,
      partner_id: hungry55.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: hungry55.id
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: FF.id
    }, {
      category_id: hotCuisine.id,
      partner_id: FF.id,
      priority: 1
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: DD.id,
      priority: 1
    }, {
      category_id: atTwilight.id,
      partner_id: DD.id
    },
    ////////
    {
      category_id: thai.id,
      partner_id: SS.id
    }, {
      category_id: buffet.id,
      partner_id: SS.id,
      priority: 1
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: AA.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: AA.id
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: GG.id
    }, {
      category_id: hotCuisine.id,
      partner_id: GG.id,
      priority: 1
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: QQ.id,
      priority: 1
    }, {
      category_id: atTwilight.id,
      partner_id: QQ.id
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: WW.id
    }, {
      category_id: buffet.id,
      partner_id: WW.id,
      priority: 1
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: EE.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: EE.id
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: RR.id
    }, {
      category_id: hotCuisine.id,
      partner_id: RR.id,
      priority: 1
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: TT.id,
      priority: 1
    }, {
      category_id: atTwilight.id,
      partner_id: TT.id
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: YY.id
    }, {
      category_id: buffet.id,
      partner_id: YY.id,
      priority: 1
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: UU.id
    }, {
      category_id: fineDining.id,
      partner_id: UU.id,
      priority: 1
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: II.id
    }, {
      category_id: hotCuisine.id,
      partner_id: II.id,
      priority: 1
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: OO.id
    }, {
      category_id: atTwilight.id,
      partner_id: OO.id,
      priority: 1
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: PP.id,
      priority: 1
    }, {
      category_id: buffet.id,
      partner_id: PP.id
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: ZZ.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: ZZ.id
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: XX.id
    }, {
      category_id: hotCuisine.id,
      partner_id: XX.id,
      priority: 1
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: CC.id,
      priority: 1
    }, {
      category_id: atTwilight.id,
      partner_id: CC.id
    }, 
    ////////
    {
      category_id: chinese.id,
      partner_id: VV.id
    }, {
      category_id: buffet.id,
      partner_id: VV.id,
      priority: 1
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: BB.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: BB.id
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: NN.id
    }, {
      category_id: hotCuisine.id,
      partner_id: NN.id,
      priority: 1
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: MM.id,
      priority: 1
    }, {
      category_id: atTwilight.id,
      partner_id: MM.id
    }, 
    ////////
    {
      category_id: japanese.id,
      partner_id: QA.id,
      priority: 1
    }, {
      category_id: buffet.id,
      partner_id: QA.id
    }, 
    ////////
    {
      category_id: thai.id,
      partner_id: QC.id,
      priority: 1
    }, {
      category_id: fineDining.id,
      partner_id: QC.id
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Partner_Category', null, {});
  }
};
