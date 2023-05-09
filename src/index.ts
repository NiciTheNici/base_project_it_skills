import { DataSource } from "typeorm"



const main = async() => {
  const db = new DataSource({
    type: "postgres", 
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "base_project",
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