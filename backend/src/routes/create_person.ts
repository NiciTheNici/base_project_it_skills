import express from "express";

const router = express.Router();

router.get('/api/person', (req, res) => {
  res.send("hello");
});

export { router as createPersonRouter }
