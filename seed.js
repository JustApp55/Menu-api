require('dotenv').config()
const Product = require('./models/product.js')
const mongoose = require('mongoose')
const db = require('./models/db')

const productSeed = [
    {
        id: 1,
        title: 'Waffle-Wich',
        category: 'Breakfast',
        price: 12.50,
        img: 'https://canadify.com/wp-content/uploads/2019/08/Tim-Hortons-Brings-Back-Belgian-Waffle-Breakfast-Sandwich-678x381.jpg',
        desc: 'The standard build features a pair of real Belgian Waffles sandwiching savoury sausage, a fluffy egg omelette, and processed cheese.'
    },
    {
        id: 2,
        title: 'SteVege',
        category: 'Lunch',
        price: 24.50,
        img: 'https://thumbs.dreamstime.com/b/japanese-hibachi-lunch-made-fried-rice-shrimp-steak-vegetables-close-up-table-vertical-top-view-plate-172491252.jpg',
        desc: 'Finger licking tasty Japanese lunch made of fried rice, shrimp, steak and vegetables close-up'
    },
    {
        id: 3,
        title: 'Grilled Filet Mignon',
        category: 'Dinner',
        price: 30.00,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKkQKGwmhQ986g-7TdJ1i55eoXDiI9W80a3c4fYHWSg4anwXM6EdJxgbR4jLu_lcoBu0&usqp=CAU.jpg',
        desc: 'Grilled Filet Mignon with delicious classic French Bearnaise and dipping steamed asparagus spears.'
    },
    {
        id: 4,
        title: 'Lobster Thermidor',
        category: 'Dinner',
        price: 16.50,
        img: 'https://exquisite-taste-magazine.com/wp-content/uploads/2019/11/Arwana-signature-dish-Lobster-Thermidor.jpg',
        desc: 'French dish of lobster meat cooked in a rich wine sauce, stuffed back into a lobster shell, and browned. It comes with a mixture of egg yolks and Brandy sauce'
    },
    {
        id: 5,
        title: 'Wild Plum Tea',
        category: 'Dessert',
        price: 13.95,
        img: 'https://berryworld.imgix.net/assets/Matt-Weedon-White-chocolate-cheesecake-with-Sweet-Eve-strawberries.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1500&q=60&w=2300.jpg',
        desc: 'A muffin with jam with almonds, more enticing than any of the lunch entrees'
    },
    {
        id: 5,
        title: 'Pina Colada',
        category: 'Drinks',
        price: 11.95,
        img: 'https://www.culinaryhill.com/wp-content/uploads/2021/12/Piña-Colada-Culinary-Hill-1200x800-1-500x500.jpg',
        desc: 'Hands down, the BEST Pina Colada. The flavor trifecta of pineapple, coconut and rum just can’t be beat when it comes to feeling and tasting that tropical vibe.'
    }

]

const productInsert = async ()=> {
    await product.insertMany(productSeed)
}
productInsert().then(() =>{
    db.close()
})



