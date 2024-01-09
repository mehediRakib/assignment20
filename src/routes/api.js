const express=require('express');
const router=express.Router();

const productController=require('../controller/productController')


router.get('/createProduct',productController.createProduct);
router.get('/total-revenue',productController.totalRevenue)
router.get('/quantity-by-product',productController.quantityByProduct)
router.get('/top-products',productController.topProduct)
router.get('/average-price',productController.averagePrice)
router.get('/revenue-by-month',productController.revenueByMonth)
router.get('/highest-quantity-sold',productController.highestQuantitySold)
router.get('/department-salary-expense',productController.departmentSalaryExpense)




module.exports=router;