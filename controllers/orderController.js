const orderQueries = require('../queries/orderQueries');
const pool = require('../database/db');
const httpError = require('../error/httpError')

const postOrder = async (req,res) =>{
    try {
        const {order_type, product_name, price, description, location, contact} = req.body;
        var img_src = `http://localhost:4000/${req.file.filename}`;
        console.log(img_src);
        console.log(req.body);
        const user_id = req.user.user;

        if (!order_type || !product_name || !price || !description || !location || !contact )
            throw new httpError('Please provide all data', 400);
        const product_status = 'used';
        try{
        const orderPosted = await pool.query(orderQueries.postorder, [order_type, user_id, product_name, price, product_status, description, location, contact, img_src]);
        res.status(200).send('successfully posted an order')
        }
        catch (err){
            console.log(err)
            console.log(dbtestnabin)
            throw new httpError('something went wrong', 500);
        }

    }
    catch(httpError){
        res.status(httpError.status).send(httpError.msg);
    }
}

const getRecentOrders = async (req,res) =>{
    try {
        console.log(orderQueries.recentorders)
        const orders = await pool.query(orderQueries.recentorders)
        res.status(200).send(JSON.stringify(orders.rows))
    }
    catch(err){
        console.log(err)
        res.status(500).send('something went wrong');
    }
}

const viewOrder = async (req, res) =>{
    try {
        const order_id = req.params.id;
        const order = await pool.query(orderQueries.order, [order_id]);
        res.status(200).send(JSON.stringify(order.rows[0]));
    }
    catch(err){
        console.log(err);
        res.status(500).send('database error');
    }
}

const similarOrders = async (req, res) =>{
    try {
        const order_id = req.params.id;
        const order = await pool.query(orderQueries.similarOrders, [order_id]);
        res.status(200).send(JSON.stringify(order.rows));
    }
    catch(err){
        console.log(err);
        res.status(500).send('database error');
    }
}

module.exports = {
    postOrder,
    getRecentOrders,
    viewOrder,
    similarOrders,
}