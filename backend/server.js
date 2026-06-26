const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
const articleRoutes = require("./routes/articleRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bannerRoutes = require("./routes/bannerRoutes");

app.use("/api/services", serviceRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/banners", bannerRoutes);
app.get("/", (req, res) => {
  res.send("The admin module were working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});