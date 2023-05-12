import express from "express";
import {Note} from "../entities/note";
import {QueryFailedError} from 'typeorm';

const router = express.Router();

router.post('/api/note', async (req, res) => {
    const {
        title,
        note_text
    } = req.body
    const note = Note.create({
        title: title,
        note_text: note_text
    })
    try {
        await note.save();
        return res.json(note);
    } catch (error) {
        res.statusCode = 500;
        if (error instanceof QueryFailedError) {
            console.error('PostgreSQL Error:', error.message);
            res.send(error.message);
        } else {
            console.error('Error executing database operation:', error);
        }
    }
});

router.get('/api/note', async (req, res) => {
    const persons = await Note.find();
    res.json(persons);
})
/*
router.get('/api/note/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const person = await Note.findOne({
            where: {
                id: +id,
            }
        })
        if (person == null) {
            return res.send("no person found with this id --> " + id)
        }
        return res.json(person);
    } catch (error) {
        return res.json(error)
    }
})
*/
export {router as createPersonRouter}
