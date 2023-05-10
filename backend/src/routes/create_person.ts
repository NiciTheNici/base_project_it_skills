import express from "express";
import { Person } from "../entities/person";

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
  await person.save();
  return res.json(person);
});

export { router as createPersonRouter }
