const Product = require("../models/product");
// const Product = require("../models/product");

// get all the products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.send("Product Error " + err);
  }
};

// Create the user  / Register
exports.products = async (req, res, next) => {
  try {
    console.log("REq.body", req.body,req.file);
    //create new user in db
   let product = new Product({
      Name: req.body.Name,
      Image: req.file.filename,
      price: req.body.price,
      discountPrice: req.body.discountPrice,
      ratings: req.body.ratings,
      totalReviews: req.body.totalReviews,
    });

    //save the user in db
    product = await product.save();

    return res.json({
      success: true,
      data: product,
      msg: "product created successfully",
    });
  } catch (err) {
    console.log("Error handling =>", err);
    next();
  }
};