require('dotenv').config(); //Add this to make use of .env file

const express = require('express');
const app = express();


// // FOR CONNECTION TO MONGODB ATLAS - START HERE
// // Creating a MongoDB connection using Mongoose
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGO_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// // CONNECTION TO MONGODB ATLAS - END HERE



// FOR CONNECTION TO ATLAS USING MONGOOSE - START HERE

const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


//Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//Start Server
app.listen(3000, () => {
    console.log('Server is running on https:3000');
});