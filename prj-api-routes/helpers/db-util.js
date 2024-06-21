import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://easyxxu:lKfV8VTWGc2Il34y@first-project.5abu22s.mongodb.net/events?retryWrites=true&w=majority&appName=first-project"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, filter, sort) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}
