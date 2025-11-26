// /src/newsletter.js

const express = require("express");
const router = express.Router();
const { db } = require("../database");
const { newsletterTable } = require("../db/schema");
const { eq } = require("drizzle-orm");

router.get("/", async (req, res) => {
  try {
    const posts = await db.select().from(newsletterTable);
    res.send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Fehler beim Laden." });
  }
});

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).send({ success: false, message: "Ungültige Email." });
  }

  try {
    const exists = await db
      .select()
      .from(newsletterTable)
      .where(eq(newsletterTable.email, email));

    if (exists.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Bereits eingetragen."
      });
    }

    const inserted = await db
      .insert(newsletterTable)
      .values({ email })
      .returning();

    res.json({ success: true, data: inserted[0] });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Fehler beim Speichern." });
  }
});

module.exports = router;
