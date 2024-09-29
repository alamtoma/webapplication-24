const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config');
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const pollsRoute = require('./routes/polls');
const usersRoute = require('./routes/users');

app.use('/api/polls', pollsRoute);
app.use('/api/users', usersRoute);

// Synkroniser databasemodeller
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
