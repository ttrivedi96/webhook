const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

/* Set Middleware to Express App */
app.use(express.json());

// Routes
app.post("/handle-webhooks", (req, res) => {
    const body = {
        "id": "1",
        "firstname": "Tanmay",
        "lastname": "Trivedi",
        "message": "This is response from webhook"
    };
    const headers = {
        'Content-Type': "application/json",
    }
    const clientWebhookUrl = "http://localhost:8093/webhook2" // This will be different for each client
    axios.post(clientWebhookUrl, body, { headers })
    // return res.sendStatus(200);
    return res.send(body)
})

app.post("/set-webhook", (req, res) => {
    const clientWebhookUrl = req.url
    // This URL will be saved to database
    return res.sendStatus(200)
})

/* Listen Server */
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
})