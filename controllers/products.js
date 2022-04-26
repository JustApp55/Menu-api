const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// Index Route
router.get('/', (req, res) => {
    Product.find({}, (err, foundProducts) => {
        res.json(foundProducts)
    })
})

// Delete Route
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct)=>{
        res.json(deletedProduct)
    })
})

// Update Route
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProduct)=>{
        res.json(updatedProduct)
    })
})

// Create route
router.post('/', (req, res) => {
    Product.create(req.body, (err, createdProduct)=>{
        res.json(createdProduct)
    })
})

// Show route
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct)=>{
        res.json(foundProduct)
    })
})


module.exports = router