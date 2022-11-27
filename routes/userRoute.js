const router = require('express').Router();
const userController = require('../controllers/userController');
const isAuth = require('../middlewares/auth');

router.get('/', userController.get);
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);
router.get('/logout', userController.getLogout);
router.get('/register', userController.getRegister);
router.post('/register', userController.postRegister);
router.get('/profile', isAuth, userController.getProfile);

module.exports = router;
