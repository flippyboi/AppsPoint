const Router = require('express')
const router = new Router()
const developerController = require('../controllers/developerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), developerController.create)
router.get('/', developerController.getAll)

module.exports = router
