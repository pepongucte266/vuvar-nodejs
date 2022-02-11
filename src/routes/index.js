const carRoute = require('./car')
const siteRoute = require('./site')
const userRoute = require('./user')

function route(app) {

    app.use('/user', userRoute);
    app.use('/', carRoute);
}

module.exports = route;