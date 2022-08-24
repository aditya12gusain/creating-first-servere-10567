const express = require("express");

// initialization
const app = express();
// application will now use json format for data
app.use(express.json());

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

// http://localhost:8081/todos
app.get("/todos", (req, res) => {
  // callback
  res.status(200).send(toDoList);
});

// http://localhost:8081/todos
app.post("/todos", (req, res) => {
  // callback
  let newToDoItem = req.body.item;
  toDoList.push(newToDoItem);
  res.status(201).send({
    message: "Task added successfully",
  });
});

app.delete("/todos", (req, res) => {
  // callback
  const itemToDelete = req.body.item;

  toDoList.find((element, index) => {
    if (element === itemToDelete) {
      toDoList.splice(index, 1);
    }
  });

  res.status(202).send({
    message: `Deleted item - ${req.body.item}`,
  });
});

// just some additional examples
// app.get("/todos/create");
// app.post("/todos/create");

// put, patch // all the other methods on a particular route
app.all("/todos", (req, res) => {
  res.status(501).send();
});

// all the other routers
app.all("*", (req, res) => {
  res.status(404).send();
});

app.listen(port, () => {
  // callback
  console.log(`Nodejs server started on port ${port}`);
});
