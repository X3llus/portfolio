import clientPromise from "$lib/mongodb";
import { ObjectId } from "mongodb";

export async function get({ url: { searchParams } }) {
  try {
    const _id = searchParams.get('_id');
    const client = await clientPromise;
    const db = client.db('projects');
    const collection = db.collection('projects');
    const project = await collection.findOne({ _id: ObjectId(_id) });
    return {
      status: 200,
      body: {
        project: project
      }
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        error: err
      }
    }
  }
}
