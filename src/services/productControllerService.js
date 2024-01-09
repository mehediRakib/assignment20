const productModel=require('../Model/ProductModel');


const createProductService=async (req)=>{
    try{
        const reqBody=req.body;
        let data=await productModel.create(reqBody)
        return {status:'success',data:data};
    }
    catch (e) {
        return {status:'fail',data:e.toString()};
    }
}


const totalRevenueService=async ()=>{
    try{
        let result=await productModel.find()
        let totalPrice=0;
        result.map(element=>{
             totalPrice+=element.price*element.quantity;
        })
        return {status:'success',data:totalPrice};

    }catch (e) {
      return  {status:"fail",data:e.toString()};
    }
}

const quantityByProductService=async ()=>{
    try{
        let result=await productModel.find()
        let totalQuantity=0;
        result.map(element=>{
            totalQuantity+=element.quantity;
        })
        return {status:'success',data:totalQuantity};

    }catch (e) {
        return  {status:"fail",data:e.toString()};
    }
}

const topProductService=async ()=>{
    try {
        const topProducts = await productModel.aggregate([
            { $group: { _id: '$product' , totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } },
            { $sort: { totalRevenue: -1 } },
            { $limit: 5 },
        ]);
        return {status:'success',data:topProducts};
    } catch (e) {
        return {status:'success',data:e.toString()};
    }
}

const averagePrice=async ()=>{
    try{
        let result=await productModel.find()
        let totalQuantity=0;
        let totalPrice=0;
        result.map(element=>{
            totalQuantity+=element.quantity;
            totalPrice+=element.price;
        })
        let average=totalPrice/totalQuantity;
        return {status:'success',data:average};
    }catch (e) {
        return  {status:"fail",data:e.toString()};
    }
}


const revenueByMonthService=async ()=>{
    try {
        const revenueByMonth = await productModel.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: '$date' },
                        month: { $month: '$date' },
                    },
                    totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
                },
            },
        ]);
        return {status:'success',data:revenueByMonth};
    } catch (e) {
        return {status:'success',data:e.toString()};
    }
}

const highestQuantitySoldService=async ()=>{
    try {
        const result = await productModel.findOne().sort({ quantity: -1 });
        return {status:'success',data:result};
    } catch (e) {
        return {status:'fail',data:e.toString()};
    }
};

const departmentSalaryExpenseService=async ()=>{
    try{
        // const result=await productModel.aggregate([
        //     {
        //         $group:{
        //             salaryExpense:{$sum:'$null'}
        //         }
        //
        //     }
        // ])
        return {status:'success',data:null};
    }catch (e) {
        return {status:'fail',data:e.toString()};
    }
}



module.exports={
    createProductService,
    totalRevenueService,
    quantityByProductService,
    averagePrice,
    topProductService,
    revenueByMonthService,
    highestQuantitySoldService,
    departmentSalaryExpenseService
}