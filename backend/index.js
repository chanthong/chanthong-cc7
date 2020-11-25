require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require('./models');

const partnerRoutes = require("./routes/partner");
const userRoutes = require("./routes/user");
const reserveRoutes = require("./routes/reserve");
const categoryRoutes = require("./routes/category")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/partners", partnerRoutes);
app.use("/users", userRoutes);
app.use("/reserves", reserveRoutes);
app.use("/category", categoryRoutes);

app.listen(process.env.PORT, () => {
   console.log(`Server is running at PORT ${process.env.PORT} `);
});

db.sequelize.sync({ force: false }).then(() => {
   console.log("Database connected.");
}).catch(err => {
   console.log(err);
});