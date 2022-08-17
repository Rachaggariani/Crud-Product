const express=require('express');
const connecterDB=require('./config/db.js');
const ProductRouter=require('./routes/product');
const cors=require('cors');
//creation serveur 
const app=express();
//connecter a la base 
app.use(cors());
app.use(express.json());
app.use('/api/products',ProductRouter);
connecterDB();
app.listen(4000,()=>{
console.log('le service est executable');
}) 
