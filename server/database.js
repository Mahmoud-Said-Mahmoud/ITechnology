const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function initDB() {
  const db = await open({
    filename: "./clients.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      email TEXT,
      phone TEXT,
      service TEXT,
      message TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}

module.exports = initDB;