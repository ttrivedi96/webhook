const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8093;

/* Set Middleware to Express App */
app.use(express.json());

// Routes
app.post("/webhook2", (req, res) => {
    const body = req.body; // receives {"id": "1", "message": "hello"}
    console.log(body)
    return res.status(200).send(body);

})

/* Listen Server */
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
})