const { Router } = require('express')
const userController = require('../controllers/userController')
const router = Router()

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);




module.exports = router