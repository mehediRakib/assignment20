const {createProductService, totalRevenueService, quantityByProductService, averagePrice, topProductService,
    revenueByMonthService, highestQuantitySoldService, departmentSalaryExpenseService
} = require("../services/productControllerService");

exports.createProduct=async (req,res)=>{
let data=await createProductService(req);
res.status(200).json(data);
}


exports.totalRevenue=async (req,res)=>{
   let data= await totalRevenueService();
    res.status(200).json(data);
}


exports.quantityByProduct=async (req,res)=>{
    let data= await quantityByProductService();
    res.status(200).json(data);
}

exports.topProduct=async (req,res)=>{
    let data= await topProductService();
    res.status(200).json(data);
}

exports.averagePrice=async (req,res)=>{
    let data=await averagePrice();
    res.status(200).json(data);

}

exports.revenueByMonth=async(req,res)=>{
    let data=await revenueByMonthService();
    res.status(200).json(data);
}

exports.highestQuantitySold=async (req,res)=>{
    let data=await highestQuantitySoldService();
    res.status(200).json(data);

}

exports.departmentSalaryExpense=async(req,res)=>{
    let data=await departmentSalaryExpenseService();
    res.status(200).json(data);
}