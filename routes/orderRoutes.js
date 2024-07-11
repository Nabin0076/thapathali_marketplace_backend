const { Router } = require('express');
const {postOrder, getRecentOrders, viewOrder, similarOrders} = require('../controllers/orderController');
const { authenticateUser } = require('../middlewares/auth');
const upload = require('../middlewares/multer');

const router = Router();

router.post('/postOrder',authenticateUser, upload.single('file'), postOrder);
router.get('/recentOrders', getRecentOrders);
router.get('/similarOrders/:id', similarOrders);
router.get('/:id', viewOrder);



module.exports = router;
