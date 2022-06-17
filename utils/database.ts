import { MongoClient, ServerApiVersion } from "mongodb";
console.log("uri", process.env.MONGODB_URI);
export default new MongoClient(process.env.MONGODB_URI || "", {
	serverApi: ServerApiVersion.v1,
});
