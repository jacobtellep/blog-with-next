// this is how you hit API routes in nextjs
// use this code for reference for future projects

const handler = (req, res) => {
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

    // store in a database

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201),
      json({ message: 'Successfully stored message.', message: newMessage });
  }
};

export default handler;