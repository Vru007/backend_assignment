const express=require("express");
const mongoose=require('mongoose');
const connectToDatabase=require("./config/connection")
const routes=require("./router/route");
const app=  express();
const PORT=process.env.PORT||3000;

connectToDatabase();


app.use(express.json());
app.use("/api", routes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
