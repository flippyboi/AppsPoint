const path = require('path')
const uuid = require('uuid')
const { App } = require('../models/models')
const ApiError = require('../error/ApiError')



class AppController {
    async create(req, res, next) {
        try {
            const {
                name,
                description,
                price,
                platform,
                version,
                developerId,
                categoryId
            } = req.body

            const { img } = req.files

            // преобразование изображения и файла и помещение в static
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const app = await App.create({
                name,
                description,
                price,
                platform,
                version,
                developerId,
                categoryId,
                img: fileName

            })
            return res.json(app)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res) {
        let { categoryId, developerId, limit, page } = req.query
        page = page || 1
        limit = limit || 9 // лимит на одну страницу
        let offset = page * limit - limit // отступ
        let apps;
        if (!categoryId && !developerId) {
            apps = await App.findAndCountAll({ limit, offset })
        }

        if (categoryId && !developerId) {
            apps = await App.findAndCountAll({ where: { categoryId }, limit, offset })
        }

        if (!categoryId && developerId) {
            apps = await App.findAndCountAll({ where: { developerId }, limit, offset })
        }
        if (categoryId && developerId) {
            apps = await App.findAndCountAll({ where: { categoryId, developerId }, limit, offset })
        }

        return res.json(apps)
    }

    async getOne(req, res) {
        const { id } = req.params
        const app = await App.findOne({ where: { id } })
        return res.json(app)
    }
    
}

module.exports = new AppController()