const { Router } = require('express');
const {postorder, getorder} = require('../controllers/ordercontroller');

const router = Router();

router.post('/postorder', postorder);
router.get('/recentorder', getorder);
router.get('/category', getcategory);


module.exports = router;
