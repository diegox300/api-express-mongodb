import mongoose from "mongoose";

async function conectaNaDatabase() {
mongoose.connect(DB_CONNECTION_STRING);

return mongoose.connection;
};

export default conectaNaDatabase;