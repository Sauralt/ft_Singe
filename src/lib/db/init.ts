import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database;

export function getDatabase(): Database.Database {
  if (!db) {
    const dbPath = process.env.DATABASE_PATH || './data/app.db';
    const fullPath = path.join(process.cwd(), dbPath);

    db = new Database(fullPath);
    db.pragma('journal_mode = WAL');
  }

  return db;
}

export function closeDatabase(): void {
  if (db) {
    db.close();
  }
}

export function initializeDatabase(): void {
  const database = getDatabase();

  // Exemple: créez vos tables ici
  database.exec(`
    CREATE TABLE IF NOT EXISTS examples (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
