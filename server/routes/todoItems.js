const router = require('express').Router();
const todoItemsModel = require('../models/todoItems');

//Add item to the database
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        //Save this item in the database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.status(404).json({message:"Page not found"});
    }
})

//Get data from the database
router.get('/api/items', async (req, res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.status(404).json({message:"Page not found"});
    }
})

//Update item
router.patch('/api/item/:id', async (req, res)=>{
    try{
        //Find the item by its id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updateItem);
    }catch(err){
        res.status(404).json({message:"Page not found"});
    }
})

//Delete item from the database
router.delete('/api/item/:id', async (req, res)=>{
    try{
        //Find the item by its id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.status(404).json({message:"Page not found"});
    }
})

module.exports = router;