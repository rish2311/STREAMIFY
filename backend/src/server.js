import express from "express"
import dotenv from "dotenv";
// or we can also write: import "dotenv/config"; and remove the line written below-

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Bad practices of putting routes here
app.get("/api/auth/signup", (req, res) => {
  res.send("Signup Route");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login Route");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout Route");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
