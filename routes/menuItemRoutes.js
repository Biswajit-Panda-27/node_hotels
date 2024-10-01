const express = require('express');
const router = express.Router();

const MenuItem = require("./../models/menuItem");


  // SET method for menuItem
  router.post('/', async (req,res)=>{
    try{
      const data = req.body;

      const menuItems = new MenuItem(data);

      const response =  await menuItems.save();
      console.log("data saved");
      res.status(200).json(response);

    } catch(err){
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // GET method for menuItem
  router.get('/', async(req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data)
    }catch(err){
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })


  router.get('/:tasteType', async (req, res)=>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' ||mtasteType == 'spicy' || tasteType == 'sour') {
            const response = await MenuItem.find({ taste: tasteType });
            res.status(200).json(response);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error"})

    }
  })


module.exports = router;