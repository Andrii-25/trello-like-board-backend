const express = require("express");
const cors = require("cors");
require("dotenv/config");

const app = express();
const listRouter = require("./routes/list.routes.js");
const cardRouter = require("./routes/card.routes.js");

app.use(express.json());
app.use(cors());

app.use("/lists", listRouter);
app.use("/cards", cardRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("App is running...");
});
