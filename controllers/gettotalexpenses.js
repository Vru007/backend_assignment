const getEthereumPrice=require("../helper/getEthereumPrice");
const User=require("../models/User");
async function getTotalExpenses(req, res) {
    const { address } = req.params;
    try {
      const { transactions } = await User.findOne({ address: address });
      const lastestPrice = await getEthereumPrice();
  
      let totalExpenses = 0;
      transactions.forEach((element) => {
        totalExpenses += (element.gasPrice * element.gasUsed) / 1e18;
      });
  
      res.status(200).json({
        totalExpenses,
        currentPrice: lastestPrice,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports={getTotalExpenses}