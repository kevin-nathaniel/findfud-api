require('dotenv').config()
const PORT = process.env.PORT || 4000;

const express = require('express');
const usersRoutes = require('./routes/user');
const restaurantRoutes = require('./routes/restaurant');
const log = require('./middleware/log');

const app = express();

app.use(log);
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/restaurants', restaurantRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})