const express = require('express')
const router = express.Router()
const Products = require('../models/product')

// Index Route
router.get('/', (req, res) => {
    Products.find({}, (err, foundProducts) => {
        res.json(foundProducts)
    })
})

// Delete Route
router.delete('/:id', (req, res) => {
    Products.findByIdAndRemove(req.params.id, (err, deletedProduct)=>{
        res.json(deletedProduct)
    })
})

// Update Route
router.put('/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProduct)=>{
        res.json(updatedProduct)
    })
})

// Create route
router.post('/', (req, res) => {
    Products.create(req.body, (err, createdProduct)=>{
        res.json(createdProduct)
    })
})

// Show route
router.get('/:id', (req, res) => {
    Products.findById(req.params.id, (err, foundProduct)=>{
        res.json(foundProduct)
    })
})


module.exports = router