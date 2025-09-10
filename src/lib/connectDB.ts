import mongoose from 'mongoose';

declare global {
	// eslint-disable-next-line no-var
	var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	console.warn('MONGODB_URI is not set. Please add it to your .env file.');
}

export async function connectDB() {
	if (!global._mongoose) {
		global._mongoose = { conn: null, promise: null };
	}

	if (global._mongoose.conn) {
		return global._mongoose.conn;
	}

	if (!global._mongoose.promise) {
		const uri = MONGODB_URI || '';
		global._mongoose.promise = mongoose
			.connect(uri, {
				dbName: process.env.MONGODB_DB || undefined,
				bufferCommands: false,
			})
			.then((m) => m);
	}

	global._mongoose.conn = await global._mongoose.promise;
	return global._mongoose.conn;
}

export default connectDB;
