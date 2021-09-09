import clientPromise from "../../../lib/mongodb";

export async function get() {
	try {
		const client = await clientPromise;
		const db = client.db('projects');
		const collection = db.collection('projects');
		const projects = await collection.find().toArray();
		return {
			status: 200,
			body: {
				projects: projects
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: err
		}
	}
}

// export async function post(request) {
//     const client = await clientPromise;
//     const db = client.db('projects');
//     const collection = db.collection('projects');
//     const result = collection.insertOne(request.body);
//     return {
//         status: 200,
//         body: {
//             result: result
//         }
//     };
// }