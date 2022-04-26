const mongoose = require('mongoose')


const productSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        category: {type: String, required: true},
        price: {type: Number, require: true},
        image: {type: String, required: true},
        desc: {type: String, required: true}
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product









































// const itemSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     category: {type: String, required: true},
//     price: {type: Number, require: true},
//     img: {type: String, required: true},
//     description: {type: String, required: true}
// })

//         title: String,
//         category: String,
//         price: Number,
//         img: String,
//         description: String