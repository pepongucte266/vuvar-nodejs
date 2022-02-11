const path = require('path');
const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const route = require('./routes')
const db = require('./config/db')
const bodyParser = require("body-parser");
const session = require('express-session')
MongoStore = require('connect-mongo')
const PORT = process.env.PORT || 8080;

// connect to db
db.connect();

//sử dụng session để kiểm tra login
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://sonvu:soncute266@vucar1st.vzsdf.mongodb.net/vucar?retryWrites=true&w=majority' })
}));



app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//template engine
app.engine('.hbs',
    engine({
        extname: '.hbs',
        allowProtoMethodsByDefault: true,
        helpers: {
            formatprice: price => Number(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
        }
    }));
app.set('view engine', 'hbs')
    // app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app)
app.listen(PORT, () => {
    console.log(`Example app listening on port: http://localhost:${PORT}`)
})