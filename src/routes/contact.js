const express = require("express");
const router = express.Router();
const { db } = require("../database");
const { contactTable } = require("../db/schema");

router.get("/", async (req, res) => {
  try {
    const all = await db.select().from(contactTable);
    res.json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Fehler beim Laden." });
  }
});

router.post("/", async (req, res) => {
  const { firstname, lastname, email, tel, address, plz, city, comments, privacy } = req.body;

  if (!firstname || !lastname || !email || !comments) {
    return res.status(400).json({
      success: false,
      message: "Bitte alle Pflichtfelder ausfüllen."
    });
  }

  if (!privacy) {
    return res.status(400).json({
      success: false,
      message: "Bitte bestätige die Datenschutzerklärung."
    });
  }

  try {
    const inserted = await db.insert(contactTable).values({
      firstname,
      lastname,
      email,
      tel: tel || null,
      address: address || null,
      plz: plz || null,
      city: city || null,
      comments: comments || null
    }).returning();

    res.json({ success: true, data: inserted[0] });

  } catch (err) {
    console.error("Fehler beim Speichern:", err);
    res.status(500).json({
      success: false,
      message: "Fehler beim Speichern.",
      details: err.message
    });
  }
});

module.exports = router;