import clientPromise from "../../../lib/mongodb";
import { checkCached, cacheStarred, cachedProjects } from "../../../lib/starredProjects";

export async function get() {
	try {
		const projects = await getStarred();
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

async function getStarred() {
	if (checkCached())
		return cachedProjects;
	const client = await clientPromise;
	const db = client.db('projects');
	const collection = db.collection('projects');
	const projects = await collection.find({ 'starred': true }).toArray();
	cacheStarred(projects);
	return projects
}
