const postorder = 'insert into Orders (order_type, user_id, product_name, price, product_status, description, location, contact, img_src)\
\ values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const recentorders = 'select * from orders order by order_id desc limit 10';
const order = 'select orders.*, username from orders inner join users\
    on users.user_id = orders.user_id where order_id = $1';
const similarOrders = 'select * from orders where order_id != $1 order by date desc limit 10';

module.exports = {
    postorder,
    recentorders,
    order,
    similarOrders,
}