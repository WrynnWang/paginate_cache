const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const tickets = require("./api/tickets");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello World" });
});
app.use("/tickets", tickets);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
