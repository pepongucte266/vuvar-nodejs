const carModel = require('../model/CarModel')
const data = require('./data')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongose');

class CarController {
    index(req, res, next) {
        carModel.find({})
            .then(cars => {
                return res.render('car/shop', { cars: mutipleMongooseToObject(cars, "1"), userid: req.session.userId })
            })
            .catch(next)
    }

    valid(req, res, next) {
        res.render('car/index', { userid: req.session.userId })
    }

    checkvalid(req, res, next) {
        // console.log(data[req.body.makeSelect][req.body.modelSelect][yearSelect])

        req.body.price = data[req.body.makeSelect][req.body.modelSelect][req.body.versionSelect][req.body.yearSelect]

        if (req.body.price / 1000000000 < 1) {
            var minPrice = Math.round((req.body.price - req.body.price * 0.125) / 1000000)
            var maxPrice = Math.round((req.body.price + req.body.price * 0.025) / 1000000)
            req.body.string = minPrice + " triệu VND" + ' ~ ' + maxPrice + " triệu VND"
        } else if (req.body.price / 1000000000 >= 1) {
            var minPrice = ((req.body.price - req.body.price * 0.125) / 1000000000).toFixed(1)
            var maxPrice = ((req.body.price + req.body.price * 0.025) / 1000000000).toFixed(1)
            req.body.string = minPrice + " tỷ VND" + ' ~ ' + maxPrice + " tỷ VND"
        } else {
            req.body.string = "Xin lỗi, chúng tôi chưa có dữ liệu về xe của bạn"
        }

        console.log({ car: req.body })

        res.render('car/validcar', { car: req.body, userid: req.session.userId })
    }

    show(req, res, next) {
        carModel.findById(req.params.id)
            .then((car) => {
                res.render('car/show', { car: mongooseToObject(car, "1"), userid: req.session.userId })
            })
            .catch(next);
    }

    showinterior(req, res, next) {
        carModel.findById(req.params.id)
            .then((car) => {
                res.render('car/interior', { car: mongooseToObject(car, "1"), userid: req.session.userId })
            })
            .catch(next);
    }
}

module.exports = new CarController();