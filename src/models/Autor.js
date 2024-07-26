import mongoose from "mongoose";

const autorSchema = new mongoose.Schema ({
    publicId: { types: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    nacionalidade: { type: String }
}, {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

export { autor, autorSchema }