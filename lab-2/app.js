const express = require("express");
const app = express();

const connectDB = require("./db");
const {
    getMessages,
    addMessage,
    getMessage,
    deleteMessage,
    deleteAllMessages,
    updateMessage,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Messages
app.get("/messages", getMessages);

// POST a new Message
app.post("/message", addMessage);

// GET a single Message
app.get("/Messages/:id", getMessage);

// Update Message using PUT
app.put("/messages/:id", updateMessage);

// DELETE a Goal
app.delete("/messages/:id", deleteMessage);

// DELETE all Goal
app.delete("/messages", deleteAllMessages);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server 2024/3/25 is running on port http://localhost:${PORT}`);
});