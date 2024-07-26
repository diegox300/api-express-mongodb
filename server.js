import "dotenv/config";
import app from "./src/app.js";


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando!");
    console.log(process.env.DB_CONNECTION_STRING);
    
});