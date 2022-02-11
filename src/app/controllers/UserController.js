const userModel = require('../model/UserModel')
const bcrypt = require('bcrypt');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongose');

class UserController {
    create(req, res, next) {
        if (req.body.email &&
            req.body.fullname &&
            req.body.phone &&
            req.body.password &&
            req.body.passwordConfirmation) {
            const userData = {
                email: req.body.email,
                username: req.body.fullname,
                phone: req.body.phone,
                password: req.body.password,
                passwordConfirmation: req.body.passwordConfirmation,
            }
            userModel.create(userData, function(err, user) {
                if (err) {
                    return next(err)
                } else {
                    req.session.userId = user._id;
                    return res.redirect('/');
                }
            });
        }
    }

    // POST when login
    signin(req, res, next) {
        if (req.body.email && req.body.password && req.body.password != '') {
            const userData = {
                email: req.body.email,
                password: req.body.password,
            }

            userModel.findOne({ email: userData.email }, function(err, user) {
                bcrypt.compare(userData.password, user.password, (err, result) => {
                    if (result) {
                        req.session.userId = user._id;
                        res.render('car/index', { user: mongooseToObject(user, "2"), userid: user._id });
                    } else {
                        res.render('car/index')
                    }
                })
            })
        }

    }

    //GET logout
    logout(req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    }
}
module.exports = new UserController();