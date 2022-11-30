const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Cards";
const cors = require("cors");   //  sharing dataa of front end and back end   ,, hamara front end ka server kisi or port pa chal raha ha or back end ka server kisi or port pa chal raha in dono ka apas ma data sharing k liya ham cors use karta hain 
const bodyParser = require("body-parser");   // parse the body of request 
const app = express();
const path = require("path");

mongoose.connect(url, { useNewUrlParser: true });
const cons = mongoose.connection;

cons.on("open", () => {
  console.log("connected...");
});

// app.use(express.json());
var corsOptions = {
  origin: "*",      // * means jis marzi origin sa request aye respond kara with 200 resp
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // "path module ==>" middleware function ha 
// ya line hamain hamari static cheezoo ko read karna ki ijazat de ga ya sirf uploads wala folder ko he read kara ga
app.use( express.static(path.join(__dirname, "uploads")));


const product = require("./routes/product.route");
app.use("/products", product);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});