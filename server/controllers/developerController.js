const {Developer} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeveloperController {
    async create(req, res) {
        const {name} = req.body
        const developer = await Developer.create({name})
        return res.json(developer)
    }

    async getAll(req, res) {
        const developer = await Developer.findAll()
        return res.json(developer)
    }
}

module.exports = new DeveloperController()
