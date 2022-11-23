import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
} as MongoClientOptions);

export const connectMongo = async () => {
  await client.connect();

  console.log('MongoDB is connected');
};

export const insertData = async (
  db: string,
  collection: string,
  data: object
) => {
  client.db(db).collection(collection).insertOne(data);
};

export const getData = async (
  db: string,
  collection: string,
  filter?: object
) => {
  const query = client
    .db(db)
    .collection(collection)
    .findOne(filter ?? {});
};
