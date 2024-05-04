const express = require('express');

const app = express();

const PORT = 4001;

app.get('/',(req,res) => {
    res.send("node express practice");
})


app.listen(PORT, () => {
    console.log(`listen port ${PORT}`);
})