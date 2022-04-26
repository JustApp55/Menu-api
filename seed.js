require('dotenv').config()
const Product = require('./models/product.js')
const mongoose = require('mongoose')
const db = require('./models/db')

const productSeed = [
    {
        id: 1,
        title: 'Sweet Fluffy Waffle',
        category: 'Breakfast',
        price: 12.50,
        img: 'https://www.momontimeout.com/wp-content/uploads/2021/10/waffle-recipe-square',
        desc: 'Mouth watering waffles served with syrup and strawberries, plus two side options to choose from; bacon and two chicken wings'
    },
    {
        id: 2,
        title: 'Japanese Hibachi Lunch',
        category: 'Lunch',
        price: 24.50,
        img: 'https://thumbs.dreamstime.com/b/japanese-hibachi-lunch-made-fried-rice-shrimp-steak-vegetables-close-up-table-vertical-top-view-plate-172491252',
        desc: 'Finger licking tasty Japanese lunch made of fried rice, shrimp, steak and vegetables close-up'
    },
    {
        id: 3,
        title: 'Platano Maduros (Sweet Fried Plantains)',
        category: 'Dinner',
        price: 23.50,
        img: 'https://latinamommeals.com/wp-content/uploads/2019/03/Platano-Maduros-Fried-Sweet-Plantains-3-of-6',
        desc: 'Platano maduros dish which comes with traditional Spanish rice dish or a rice and beans on the side'
    }

]

const productInsert = async ()=> {
    await product.insertMany(productSeed)
}
productInsert().then(() =>{
    db.close()
})



