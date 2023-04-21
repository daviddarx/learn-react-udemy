import { MongoClient } from 'mongodb';

async function handler(request, response) {
  if (request.method === 'POST') {
    const data = request.body;

    const client = await MongoClient.connect(
      'mongodb+srv://daviddarx:SGBwPguPLpKuOGcj@cluster0.tlig6oe.mongodb.net/meetups?retryWrites=true&w=majority',
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    response.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
