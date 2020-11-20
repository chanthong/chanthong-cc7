require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
   console.log(`Server is running at PORT ${process.env.PORT} `);
})