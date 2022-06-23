const Router = require('express')
const router = new Router()
const appCategoriesController = require('../controllers/appCategoriesController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), appCategoriesController.create)
router.get('/', appCategoriesController.getAll)

module.exports = router