import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNo, message } = req.body;

  if (!firstName || !email || !phoneNo || !message) {
    return res.status(400).json({ msg: 'Please fill in all required fields' });
  }

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phoneNo,
      message
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
