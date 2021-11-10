// Faz a importação do express
const { request, response } = require("express");
const express = require("express");

// Instancia o express
const app = express();

// Indica para o express que o Body Param pode ser do tipo JSON
app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATH - Alterar uma informação específica
 * DELETE - Deletar uma iformação no servidor
 */

/**
 * TIPOS DE PARÂMETROS
 * 
 * Route Params - Identificar um recurso para buscar / editar / deletar
 * Query Params - Paginação / Filtro
 * Body Params - Ojetos enviados para inserção / alteração (JSON)
 */
// Cria uma rota GET
app.get("/", (request, response) => {
  //return response.send("Hello World!");
  return response.json({ message: "Hello World Ignite! - Fundamento Nodejs" });
});

// Cria uma rota GET
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});
// Cria uma rota POST
app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});
// Cria uma rota PUT com o id do recurso a ser alterado
app.put("/courses/:id", (request, response) => {
  const params = request.params;
  console.log(params);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});
// Cria uma rota PATH com o id do recurso a ser alterado
app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});
// Cria uma rota DELETE passando o id do recurso a ser deletado
app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

// Define a porta na qual o servidor receberá as requisições
app.listen(3333, () => console.log("Ouvindo..."));