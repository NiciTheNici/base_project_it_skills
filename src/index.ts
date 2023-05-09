import { DataSource } from "typeorm"
import { User } from "./entities/user";
import { Animal } from "./entities/animal";
import { Pet } from "./entities/pet";



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
    ]
  });

  try {
    db.initialize();
    console.log("Connected to database");
  } 
  catch (error) {
    throw new Error("Could not connect to database");
  }
}

main();