
const Disaster = require("../models/Disaster");

exports.getDisasters = async(req,res)=>{
  const data = await Disaster.find();
  res.json(data);
};

exports.addDisaster = async(req,res)=>{
  const disaster = await Disaster.create(req.body);
  res.json(disaster);
};
