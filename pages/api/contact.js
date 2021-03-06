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

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_DB}.mrhnl.mongodb.net/?retryWrites=true&w=majority`;
    const client = await new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    try {
      client.connect((err) => {
        const collection = client
          .db(process.env.MONGODB_DB)
          .collection('messages');
        // perform actions on the collection object
        collection.insertOne(newMessage).then((req, res) => {
          console.log(req);
          console.log(res);
        });
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
