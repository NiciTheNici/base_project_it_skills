import {DataSource} from "typeorm";
import express from "express";
import {Note} from "./entities/note";
import {createPersonRouter} from "./routes/note";


const app = express();

const main = async () => {
    var cors = require('cors')
    const db = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        database: "base_project",
        synchronize: true,
        entities: [
            Note
        ]
    });

    try {
        await db.initialize();
        console.log("Connected to database");

        app.use(cors());
        app.use(express.json());
        app.use(createPersonRouter);
        app.listen(8080, () => {
            console.log("Now running on port 8080")
        })
    } catch (error) {
        console.log(error)
        throw new Error("Could not connect to database");
    }

    // const me = new Note();
    // me.username = "Nici";
    // me.first_name = "Nicolas";
    // me.email = "example@example.com"
    // me.age = 17
    // me.additional_info = {
    //   eye_color: "brown",
    //   height: 178,
    // }
    // me.keyboards = ["Discipline v1", "Discipline v2", "tm680"];
    // me.pets = [lilly];
    // await db.manager.save(me);


}

main();