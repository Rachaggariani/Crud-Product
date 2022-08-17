const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  console.log("lanched");
  let newREquestProduct = req.body;

  try {
    const newProduct = new Product({
      product: newREquestProduct.product,
      Nameprod: newREquestProduct.Nameprod,
      quantity: newREquestProduct.quantity,
      prix: newREquestProduct.prix,
    });
    console.log(newProduct)
    await newProduct.save();
    res.status(200).json({ msg: "product is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send("affiche erreur!");
  }
};

exports.obtenirProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({products});
  } catch (error) {
    console.log(error);
    res.status(500).send("error!");
  }
};
exports.UpdateProduct = async (req, res) => {
//     const id=req.params.id;
//   try {
//     const{product, Nameprod, quantity, prix}= req.body;
//     const products = await Product.findById(id);
//     res.status(200).json({products:products});
//     if (!products) {
//       res.status(404).json({ msg: "echec n existe pas un produit" });
//     }
//     product.product = product;
//     product.Nameprod = Nameprod;
//     product.quantity = quantity;
//     product.prix = prix;
//     products = await Product.findOne({ _id: req.params.id },products,{new: true})
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("error!");
//   }
// };
const id=req.params.id;
const products=req.body;
try{
    await Product.findByIdAndUpdate(id,products);
    res.status(200).json({msg:"successfully update products "});

}catch(error){
    res.status(400).json({msg: "Update is failed !"})
}
};
exports.obtenirProduct = async (req, res) => {
    const id=req.params.id;
  try {
    const products = await Product.findById(id);
   
    res.status(200).json({products:products});
  } catch (error) {
    console.log(error);
    res.status(400).send("error:operation failed !");
  }
};
exports.suppProduct = async (req, res) => { const id=req.params.id;
try{
let products=await Product.findById(req.params.id);
if(!products){
    res.status(404).json({msg:'product doesn t existe'});
}
await Product.findByIdAndRemove({_id:req.params.id})
res.json({msg:'delete product'});

}catch(error){
    console.log(error);
    res.status(500).send("error!");
}
};
