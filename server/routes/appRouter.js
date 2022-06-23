const Router = require('express')
const router = new Router()
const appController = require('../controllers/appController')

router.post('/', appController.create)
router.get('/', appController.getAll)
router.get('/:id', appController.getOne)

module.exports = router