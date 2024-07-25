import mongoose from "mongoose";

async function conectaNaDatabase() {
mongoose.connect("mongodb+srv://mongodev:83w9eYvyeDa2lcJK@cluster0.ibnk4uu.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

return mongoose.connection;
};

export default conectaNaDatabase;