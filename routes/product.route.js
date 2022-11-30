const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const product = require('../models/product');
const controller = require('../controllers/product.controller')


// 

// 
const multer = require('multer');   // we use for uploading image
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  } 
});

var upload = multer({ storage: storage });

router.post("/",upload.single('Images'), controller.products); // images is the directory from where i am uploading images 
router.get("/getProducts", controller.getAllProducts);

module.exports = router;