const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /tours routes
app.use('/tours', tourRouter);

app.use('/users', userRouter);
const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});