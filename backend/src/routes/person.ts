import express from "express";
import { Person } from "../entities/person";
import { QueryFailedError} from 'typeorm';

const router = express.Router();

router.post('/api/person', async (req, res) => {
  console.log(req.body)
  const {
    username,
    first_name,
    email,
    age,
  } = req.body
  const person = Person.create({
    username: username,
    first_name: first_name,
    email: email,
    age: age,
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
export { router as createPersonRouter }
