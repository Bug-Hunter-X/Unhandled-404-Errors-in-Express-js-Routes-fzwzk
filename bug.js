const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Express.js will send a 404 response with no additional info
    res.status(404).send();
  } else {
    res.json(user);
  }
});