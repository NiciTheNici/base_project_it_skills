import { DataSource } from "typeorm"
import { Animal, AnimalType } from "./entities/animal";
import { Pet } from "./entities/pet";
import { Console } from "./entities/console";
import express from "express";
import { Person } from "./entities/person";
import { createPersonRouter } from "./routes/person";


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
      Person,
      Animal,
      Pet,
      Console,
    ]
  });

  try {
    await db.initialize();
    console.log("Connected to database");

    app.use(express.json());
    app.use(createPersonRouter);
    app.listen(8080, () => {
      console.log("Now running on port 8080")
    })
  } 
  catch (error) {
    console.log(error)
    throw new Error("Could not connect to database");
  }
    const lilly = new Pet();
    lilly.species = "cat"
    lilly.age = 0;
    lilly.type = AnimalType.MAMMAL;
    lilly.name = "lilly"
    await db.manager.save(lilly);

    const me = new Person();
    me.username = "Nici";
    me.first_name = "Nicolas";
    me.email = "example@example.com"
    me.age = 17
    me.additional_info = {
      eye_color: "brown",
      height: 178,
    }
    me.keyboards = ["Discipline v1", "Discipline v2", "tm680"];
    me.pets = [lilly];
    await db.manager.save(me);


}

main();