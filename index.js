require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
res.send('hello lolz')

})

app.listen(PORT, () => {
    console.log(`now listening to requests on port ${PORT}`)
});