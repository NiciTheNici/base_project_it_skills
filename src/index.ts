import { DataSource } from "typeorm"
import { User } from "./entities/user";
import { Animal } from "./entities/animal";
import { Pet } from "./entities/pet";
import { Console } from "./entities/console";
import express from "express";


const app = express();

const main = async() => {
  const db = new DataSource({
    type: "postgres", 
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "base_project",
    synchronize: true,
    entities: [
      User,
      Animal,
      Pet,
      Console,
    ]
  });

  try {
    db.initialize();
    console.log("Connected to database");

    app.listen(8080, () => {
      console.log("Now running on port 8080")
    })
  } 
  catch (error) {
    throw new Error("Could not connect to database");
  }

}

main();