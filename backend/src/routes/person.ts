import express from "express";
import { Person } from "../entities/person";
import { QueryFailedError} from 'typeorm';

const router = express.Router();

router.post('/api/person', async (req, res) => {
  const {
    username,
    first_name,
    email,
    age,
    keyboards,
  } = req.body
  const person = Person.create({
    username: username,
    first_name: first_name,
    email: email,
    age: age,
    keyboards: keyboards,
  })
  try {
    await person.save();
    return res.json(person);
  }
  catch (error) {
    res.statusCode = 500;
    if (error instanceof QueryFailedError) {
      console.error('PostgreSQL Error:', error.message);
      res.send(error.message);
    } else {
      console.error('Error executing database operation:', error);
    }
  }
});

router.get('/api/person', async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
})

router.get('/api/person/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({
      where: {
        id: +id,
      }
    })
    if (person == null) {
      return res.send("no person found with this id --> " + id)
    }
    return res.json(person);
  }
  catch (error) {
    return res.json(error)
  }
})
export { router as createPersonRouter }
