module.exports = {
    mutipleMongooseToObject: function(mongooses, type) {
        if (type == "1") {
            return mongooses.map((mongoose) => {
                mongoose.price = Number(mongoose.price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                return mongoose.toObject()
            });
        } else {
            return mongooses.map((mongoose) => mongoose.toObject());
        }
    },
    mongooseToObject: function(mongoose, type) {
        if (type == "1") {
            // mongoose.price = Number(mongoose.price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
            return mongoose ? mongoose.toObject() : mongoose;
        } else {
            return mongoose ? mongoose.toObject() : mongoose;
        }
    },
};