const { Router } = require('express');
const authcontroller = require('../controllers/authcontroller');

const router = Router();

router.post('/signup', authcontroller.register);
router.post('/login', authcontroller.login);

module.exports = router;