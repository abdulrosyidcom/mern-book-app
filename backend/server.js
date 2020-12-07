const express = require('express');
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');
require('./config/database')();

const app = express();

// passing body data
app.use(express.json());

// Routes
app.use('/api/users', usersRoute);

// error handler
app.use(error.errorMiddlewareHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});