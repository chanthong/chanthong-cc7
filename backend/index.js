require("dotenv").config();
const express = require("express");
const app = express();
const partnerRoutes = require("./routes/partner");

app.use("partners", partnerRoutes);

app.listen(process.env.PORT, () => {
   console.log(`Server is running at PORT ${process.env.PORT} `);
})