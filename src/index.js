// Faz a importação do express
const express = require('express');

// Instancia o express
const app = express();

// Cria uma rota GET
app.get("/", (request, response) => {
    //return response.send("Hello World!");
    return response.json({message: "Hello World Ignite!"});
})

// Define a porta na qual o servidor receberá as requisições
app.listen(3333, () => console.log("Ouvindo..."));