const express = require('express');
const connectDB = require('./db/db');

const app = express();
app.use(express.json());

// connectDB();

const healthRouter = require("./routes/health");
const rootRouter = require("./routes/root");
const apiRouter = require("./routes/api");

app.use("/", healthRouter); 
app.use("/", rootRouter);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Color API Server is running on port ${PORT}`);
});