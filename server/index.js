const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routers/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
