const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors"); 
app.use(cors());
app.use(express.json());

// 1. Connect to DB
mongoose
  .connect(
    "mongodb+srv://vidhyasagarmyana9598:Vsagar@cluster0.ybqi23x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error", err));

// 2. Schema + Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

// 3. Routes
app.get("/", (req, res) => res.send("API Running"));

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.put("/users/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () =>
  console.log("🚀 Server running at http://localhost:5000")
);
