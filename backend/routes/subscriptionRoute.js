import express from 'express';
const Subscription = require('../models/Subscription');
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ error: 'This email is already subscribed.' });
    }

    // Save new subscription
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
