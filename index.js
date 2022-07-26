const express = require("express");
const cors = require("cors");
const app = express();

x = {}

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/", (req, res) => {
  console.log(req.body["ExternalID"]);
  x[req.body["ExternalID"]] = true;
  console.log(x);
  if(isNaN(req.body["cardNumber"]) == true)
  {  
console.log(req.body["cardNumber"])
	res.send("Invalid Card Number");
  }
  else
  {
	  console.log("Approved");
	res.send("Approved");
  }
});

app.get("/pos/:tran", (req, res) => {
  console.log(req.params.tran);
  if(x[req.params.tran] == true)
  res.send(`#${req.params.tran} is Approved`);
  if(x[req.params.tran] == false)
  res.send(`#${req.params.tran} is Declined`);
  else
  res.send("Transaction not processed");
});

app.get("/", (req, res) => {
  res.send("Hello Surya");
});

app.listen(80, () => {
  console.log("Listening");
});
