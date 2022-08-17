const express=require('express');
const router=express.Router();
const productControl=require('../Controls/productControl');
router.post('/',productControl.createProduct);
router.get('/',productControl.obtenirProducts);
router.put('/:id',productControl.UpdateProduct);
router.get('/:id',productControl.obtenirProduct);
router.delete('/:id',productControl.suppProduct);
module.exports=router; 