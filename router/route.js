const express = require('express');
const getTransactions = require('../helper/getTransactions');
const getTotalExpenses=require('../helper/')
const router = new express.Router();

router.get('/getTransactionsByAddress/:walletAddress', getTransactions);
router.get("/expenses/:address", getTotalExpenses);


module.exports=router;
