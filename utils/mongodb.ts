import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://instance:mongoformula1@cluster0.klx8tr1.mongodb.net/?retryWrites=true&w=majority';

export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
} as MongoClientOptions);

export const testAddingItems = async () => {
  await client.connect();

  client.db('formula').collection('rankingDrivers').insertOne({ chel: 'test' });
};
