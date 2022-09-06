const express = require('express');
const router = express.Router();
const Bills = require('../models/bills');

//index
router.get('/', (req, res)=>{
    Bills.find({}, (err, foundBills)=>{
        res.json(foundBills);
    });
});

//delete
router.delete('/:id', (req, res)=>{
    Bills.findByIdAndRemove(req.params.id, (err, deletedBill)=>{
        res.json(deletedBill);
    });
});

//update
router.put('/:id', (req, res)=>{
    Bills.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBill)=>{
        res.json(updatedBill);
    });
});

//create
router.post('/', (req, res)=>{
    Bills.create(req.body, (err, createdBill)=>{
        res.json(createdBill); 
    });
});

// Show
router.get('/:id', (req, res)=>{
    Bills.findById(req.params.id, (err, foundBill)=>{
        res.json(foundBill);
    });
});

module.exports = router;