const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://sonvu:soncute266@vucar1st.vzsdf.mongodb.net/vucar?retryWrites=true&w=majority');
        console.log("ok")
    } catch (err) {
        console.log("db tjach")

    }
}

module.exports = { connect }