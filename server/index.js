const express = require("express");
const cors = require("cors");
const initDB = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

let db;

(async () => {
  db = await initDB();
  console.log("Database Connected");
})();

app.post("/contact", async (req, res) => {
  try {
    const {
      firstName,
      Email,
      PhoneNumber,
      Service,
      Message,
    } = req.body;

    await db.run(
      `
      INSERT INTO contacts
      (firstName, email, phone, service, message)
      VALUES (?,?,?,?,?)
      `,
      [
        firstName,
        Email,
        PhoneNumber,
        Service,
        Message,
      ]
    );

    res.json({
      success: true,
      message: "Saved Successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await db.all("SELECT * FROM contacts ORDER BY id DESC");

    res.json(contacts);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});