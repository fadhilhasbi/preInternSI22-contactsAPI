const { nanoid } = require("nanoid");
const { Pool } = require("pg");

class ContactServices {
  constructor() {
    this._pool = new Pool();
  }

  async addContacts({ name, address, year, gender, blood, ph_number }) {
    const id = `contacts-${nanoid(16)}`;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: "INSERT INTO contacts VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id",
      values: [
        id,
        name,
        address,
        year,
        gender,
        blood,
        ph_number,
        createdAt,
        updatedAt,
      ],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new Error("Contacts gagal ditambahkan");
    }

    return result.rows[0];
  }

  async getContacts() {
    const result = await this._pool.query("SELECT * FROM contacts");
    return result.rows;
  }

  async getContactByID(contactID) {
    const query = {
      text: "SELECT * FROM contacts WHERE id = $1",
      values: [contactID],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new Error("Contact tidak ditemukan");
    }

    return result.rows[0];
  }

  async editContactByID(contactID, { name, address, ph_number }) {
    const updatedAt = new Date().toISOString();
    const query = {
      text: "UPDATE contacts SET name = $1, address = $2, ph_number = $3, updated_at = $4 WHERE id = $5 RETURNING id",
      values: [name, address, ph_number, updatedAt, contactID],
    };
  }

  async deleteContactByID(contactID) {
    const query = {
      text: "DELETE FROM contacts WHERE id = $1",
      values: [contactID],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new Error("Contact gagal dihapus. ID tidak ditemukan");
    }
  }
}

module.exports = ContactServices;
