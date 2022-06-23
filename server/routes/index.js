const Router = require('express')
const router = new Router()
const appRouter = require('./appRouter')
const developerRouter = require('./developerRouter')
const userRouter = require('./userRouter')
const appCategoriesRouter = require('./appCategoriesRouter')

router.use('/user', userRouter)
router.use('/app', appRouter)
router.use('/appCategories', appCategoriesRouter)
router.use('/developer', developerRouter)

module.exports = router
