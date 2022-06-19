// this is how you hit API routes in nextjs
// use this code for reference for future projects

import { MongoClient, ServerApiVersion } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({
        message: 'Invalid input.',
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    //     const { MongoClient, ServerApiVersion } = require('mongodb');
    //     const uri = "mongodb+srv://jacobtellep:<password>@cluster0.mrhnl.mongodb.net/?retryWrites=true&w=majority";
    //     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    //     client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //      // perform actions on the collection object
    //      client.close();
    // });

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.mrhnl.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    try {
      client.connect((err) => {
        const collection = client.db('cluster0').collection('messages');
        // perform actions on the collection object
        collection.insertOne(newMessage);
      });
    } catch (error) {
      res.status(500).json({ message: 'could not connect to database' });
      client.close();
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message.', message: newMessage });
  }
};

export default handler;
