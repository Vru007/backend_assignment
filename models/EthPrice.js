const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    price: Number,
  },
  { timestamps: true }
);

const EthPrice = new mongoose.model("EthereumPrice", priceSchema);
module.exports = EthPrice;
