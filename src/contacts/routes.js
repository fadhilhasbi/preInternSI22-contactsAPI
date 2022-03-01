const express = require("express");
const ContactServices = require("./services");
const route = express.Router();

route.post("/contacts", async (req, res) => {
  const { name, address, year, gender, blood, ph_number } = req.body;
  const contacts = await new ContactServices().addContacts({
    name,
    address,
    year,
    gender,
    blood,
    ph_number,
  });
  res.json(contacts);
});

route.get("/contacts", async (req, res) => {
  const contacts = await new ContactServices().getContacts();
  res.json(contacts);
});

route.get("/contacts/:id", async (req, res) => {
  const contactID = req.params.id;
  const getContactByID = await new ContactServices().getContactByID(contactID);
  res.json(getContactByID);
});

route.put("/contacts/:id", async (req, res) => {
  const { name, address, ph_number } = req.body;
  const contactID = req.params.id;
  const editContactByID = await new ContactServices().editContactByID(
    contactID,
    { name, address, ph_number }
  );
  res.json(editContactByID);
});

route.delete("/contacts/:id", async (req, res) => {
  const contactID = req.params.id;
  const deleteContactByID = await new ContactServices().deleteContactByID(
    contactID
  );
  res.json(deleteContactByID);
});

module.exports = route;
