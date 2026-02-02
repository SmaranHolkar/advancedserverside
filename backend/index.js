


const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
const userRoute = require('./routes/userRoute');
const apiRoute = require('./routes/apiKeyRoute');


app.use('/user', userRoute);
app.use('/apikey', apiRoute);


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);