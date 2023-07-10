// create a basic express app

const express = require('express');
const app = express();

// create a route for the app
app.get('/greet', (req, res) => {
    res.send('Hello World');
    }
);

// listen on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);


