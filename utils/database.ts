import { MongoClient, ServerApiVersion } from "mongodb";

export default new MongoClient(process.env.MONGODB_URI || "", {
	serverApi: ServerApiVersion.v1,
});
