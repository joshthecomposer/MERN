const port = 8000;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config")

const playerRoutes = require("./routes/player.routes");
playerRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));