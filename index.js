const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4001;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send("node express practice");
});

const array = [1, 2,3, 4, 5, 6, 7,9];
app.get('/things', (req, res) => {
    array.sort((a, b) => a - b);
    console.warn(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i + 1) {
            res.send(String(i + 1));
            return; 
        }
    }
    res.send(String(array.length + 1));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
