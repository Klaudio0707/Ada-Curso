import express from "express";
import { config } from "dotenv";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { randomUUID } from "crypto";

import dbJson from "./server.json";

type User = {
  id: string;
  name: string;
  age: number;
};

// interface ICreateUserDTO {
//   name: string;
//   age: string;
// }

type CreateUserDTO = Omit<User, "id">;

config();
const app = express();
app.use(express.json());
app.use("/client", express.static(path.join(__dirname, "public"), {}));

const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.PORT ?? 3000;
const dbJsonPath = path.resolve(process.cwd(), "server.json");

const users: User[] = dbJson.users;
console.log(users);

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name, age }: CreateUserDTO = req.body;

  if (!name || age < 0) {
    const errMessage = "O usuário a ser criado precisa de nome e idade";
    return res.status(400).send(errMessage);
  }

  const user = { id: randomUUID(), name, age };
  users.push(user);

  writeFileSync(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  return res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`server rodando ${url}:${port}`);
});
