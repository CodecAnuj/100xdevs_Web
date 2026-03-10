// start creating server here
const http = require("http");

let todos = [];

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, "http://localhost:3000");

  // ROOT ROUTE
  if (req.method === "GET" && urlObj.pathname === "/") {
    res.statusCode = 200;
    return res.end("Hello World");
  }

  // POST /create/todo
  if (req.method === "POST" && urlObj.pathname === "/create/todo") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      const newTodo = {
        id: todos.length + 1,
        title: data.title,
        description: data.description,
      };

      todos.push(newTodo);

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(todos));
    });
  }

  // GET /todos
  else if (req.method === "GET" && urlObj.pathname === "/todos") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(todos));
  }

  // GET /todo?id=XXX
  else if (req.method === "GET" && urlObj.pathname === "/todo") {
    const id = urlObj.searchParams.get("id");

    const todo = todos.find((t) => t.id === Number(id)); // Number(id) convert string  id "2" into 2

    if (!todo) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Todo not found" }));
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(todo));
  }

  // DELETE /todo?id=XXX
  else if (req.method === "DELETE" && urlObj.pathname === "/todo") {
    const id = urlObj.searchParams.get("id");

    const todo = todos.find((t) => t.id === Number(id));

    if (!todo) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Todo not found" }));
    }

    todos = todos.filter((t) => t.id !== Number(id)); // return a new array which doestnot have matching id

    res.statusCode = 200;
    res.end("Todo deleted");
  }

  // Unknown route
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000);
