// const UserModel = require("../models/User");
const User=require("../models/User");
const getTransactions = require("../helper/fetchTransaction");

async function getTransactions(req, res) {
    const { address } = req.params;
    try {
      const transactions = await getTransactions(address);
      // console.log(transactions)
      const updatedUser = await User.findOneAndUpdate(
        { address },
        { transactions },
        { new: true, upsert: true }
      );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    
}
module.exports={getTransactions};