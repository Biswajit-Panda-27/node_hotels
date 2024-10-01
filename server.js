const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // store inside req.body
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Welcome to my hotel....");
});


// person section

// app.post("/person", async (req, res) => {
//   // const data = req.body; // Assuming the request body contains the person data

//   // Create a new Person document using the Mongoose model

//   // method 1
//   // const newPerson = new Person(data);

//   // method 2
//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.work = data.work;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.address = data.address;
//   // newPerson.salary = data.salary;

//   //  Save the new person data
//   // POST route to add a person

//     try {
//       const data = req.body; //Assuming the request body contains the person data

//       // Create a new Person document using the Mongoose model
//       const newPerson = new Person(data);

//       // save the new person to the database
//       const response = await newPerson.save();
//       console.log("data saved");
//       res.status(200).json(response);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

  // // GET method to  get the person
  // app.get('/person', async (req,res)=>{
  //   try{
  //     const data = await Person.find();
  //     console.log('data fetched');
  //     res.status(200).json(data);
  //   }catch(err){
  //     console.log(err);
  //     res.status(500).json({ error: "Internal Server Error" });

  //   }
  // });


  // app.get('/person/:workType', async (req, res)=>{
  //   try{
  //     const workType = req.params.workType; // Extract the work type from the URL parameter.
  //     if(workType == 'chef' || workType == 'waiter' || workType == 'manager' ) {
  //       const response = await Person.find({work: workType});
  //       res.status(200).json(response);
  //     }else {
  //       res.status(404).json({error: 'Invalid work type'})
  //     }

  //   }catch (err) {
  //     console.log(err);
  //     res.status(500).json({error: 'Internal server error'})
  //   }
  // })


  // Import the router files
  const personRoutes = require('./routes/personRoutes');
  // Use the routers
  app.use('/person', personRoutes);

  // for menuItem

  const menuItemRoutes = require('./routes/menuItemRoutes');
  app.use('/menuItem', menuItemRoutes);

  // SET method for menuItem
  // app.post('/menuItem', async (req,res)=>{
  //   try{
  //     const data = req.body;

  //     const menuItems = new MenuItem(data);

  //     const response =  await menuItems.save();
  //     console.log("data saved");
  //     res.status(200).json(response);

  //   } catch(err){
  //     console.log(err);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // });

  // GET method for menuItem
//   app.get('/menuItem', async(req,res)=>{
//     try{
//       const data = await MenuItem.find();
//       console.log("data fetched");
//       res.status(200).json(data)
//     }catch(err){
//       console.log(err);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   })
   

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

// {

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/std', (req, res) =>{
//     res.send("I'm Biswajit")
// })

// app.get('/stdInfo', (req, res)=>{
//   let stdInfo={
//     name:"Biswajit",
//     roll:51,
//     mail:"biswajit@gmail.com",
//     isPresent:false
//   }
//   res.send(stdInfo)
// })

// app.listen(3000);

// const express = require('express');
// const app = express();

// app.get('/', (req, res)=>{
//   let stdList = {
//     rollOne:'biswajit',
//     rollTwo:'abhishek',
//     rollThree:'ayush'
//   }
//   res.send(stdList)
// })

// app.get('/biswajit', (req,res)=>{
//   let stdInfo = {
//     name:"Biswajit",
//     roll:51,
//     mail:"biswajit@gmail.com",
//   }
//   res.send(stdInfo);
// })

// app.get('/biswajit/character',(req,res)=>{
//   res.send("He is a good person.")
// })

// app.listen(3000);

// }

  // Informational responses(100 - 199)
  // Successful responses(200 - 299)
  // Redirection messages (300 -399)
  // Client error responses (400 - 499)
  // Server error responses (500 - 599)

  // this is for testing of git commit

  // biswajitcluster