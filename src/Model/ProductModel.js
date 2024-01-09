const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    "product":{type:String,required:true},
    "quantity": {type:Number,required:true},
    "price":{type:Number,required:true},
    "date":{type:Date,required:true},
},
    {
        timestamps:true,versionKey:false
    }
)

const ProductModel=mongoose.model('sales',productSchema);
module.exports=ProductModel;