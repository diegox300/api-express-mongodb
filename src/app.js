import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso.");
    console.log(process.env.DB_CONNECTION);
})

const app = express();
routes(app);

app.get("/livros/:id", (req,res) => {
const index = buscarLivro(req.params.id);
res.status(200).json(livros[index]);
})

app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.")
})

app.put("/livros/:id", (req,res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req,res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Excluido");
})

export default app;