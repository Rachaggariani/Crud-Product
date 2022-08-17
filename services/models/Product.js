const mongoose= require('mongoose');
const ProductSchema=mongoose. Schema({
   product:{
        type: String,
       
    },
    Nameprod:{
        type: String,
       
    },
    quantity:{
        type: Number,
     
    },
    prix:{
        type: Number,
       
    },
    createDate:{
        type: Date,
        default: Date.now(),
    }
});

module.exports=mongoose.model("Product",ProductSchema);