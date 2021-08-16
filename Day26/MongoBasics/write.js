const { MongoClient } = require("mongodb");

const MONGO_URL = "mongodb://localhost:27017";
const DB_NAME = "tododb";

async function writeTask() {
  const client = await MongoClient.connect(MONGO_URL);
  const tododb = client.db(DB_NAME);

  const todos = tododb.collection("todos");

  const todo = {
    task: "an important task",
    priority: "2",
    owner: "manager",
  };

  const result = await todos.insertOne(todo);
  console.log(result);
}

async function writeTasks() {
  const client = await MongoClient.connect(MONGO_URL);
  const tododb = client.db(DB_NAME);

  const todos = tododb.collection("todos");

  const result = await todos.insertMany([
    { task: "a task for anyone", priority: 4 },
    { task: "something anyone can do", priority: 1 },
    { task: "someone should finish this", priority: 3 },
    { task: "tasks for incentive", priority: 2 },
  ]);

  console.log(result);
}

writeTasks();
