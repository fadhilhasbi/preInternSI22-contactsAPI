/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("contacts", {
    id: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    name: {
      type: "TEXT",
      notNull: true,
    },
    address: {
      type: "TEXT",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
    gender: {
      type: "VARCHAR",
      notNull: true,
    },
    blood: {
      type: "VARCHAR",
      notNull: true,
    },
    ph_number: {
      type: "VARCHAR(20)",
      notNull: true,
    },
    created_at: {
      type: "TEXT",
      notNull: true,
    },
    updated_at: {
      type: "TEXT",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("contacts");
};
