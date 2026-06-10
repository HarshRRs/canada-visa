import Database from 'better-sqlite3';
import path from 'path';

// Connect to a local SQLite database file
const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath, { verbose: console.log });

// Initialize database tables
export function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'client', -- 'admin' or 'client'
      name TEXT
    );

    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      country TEXT,
      age TEXT,
      education TEXT,
      experience TEXT,
      english TEXT,
      occupation TEXT,
      category TEXT,
      status TEXT DEFAULT 'Pending Review',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS tickets (
      id TEXT PRIMARY KEY,
      client_id TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      sender_role TEXT NOT NULL, -- 'client' or 'admin'
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (client_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS process_updates (
      id TEXT PRIMARY KEY,
      client_id TEXT NOT NULL,
      update_text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (client_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      client_id TEXT,
      submission_id TEXT,
      file_name TEXT NOT NULL,
      file_url TEXT NOT NULL,
      document_type TEXT, -- e.g. 'payment_ticket', 'passport', etc.
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Insert default admin if it doesn't exist (using INSERT OR IGNORE for safe concurrency)
  const bcrypt = require('bcryptjs');
  const hash = bcrypt.hashSync('Harsh@123', 10);
  const insertAdmin = db.prepare('INSERT OR IGNORE INTO users (id, email, password, role, name) VALUES (?, ?, ?, ?, ?)');
  insertAdmin.run('admin-1', 'jainhatu@gmail.com', hash, 'admin', 'Admin');
}

// Call initDB immediately so tables are created on startup
initDB();

export default db;
