require("dotenv").config();
const express = require("express");
const app = express();
const partnerRoutes = require("./routes/partner");
const db = require('./models')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("partners", partnerRoutes);

app.listen(process.env.PORT, () => {
   console.log(`Server is running at PORT ${process.env.PORT} `);
});

db.sequelize.sync({ force: false }).then(() => {
   console.log("Database connected.")
}).catch(err => {
   console.log(err);
});