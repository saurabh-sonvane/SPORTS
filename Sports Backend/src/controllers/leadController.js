const connectToDatabase = require('../db');
const Lead = require('../models/Lead');

async function createLead(req, res, next) {
    try {
        console.log("\n========== NEW LEAD REQUEST ==========");
        console.log("➡️  Incoming Payload:", req.body);

        await connectToDatabase(); // ensure DB is connected
        console.log("✅ MongoDB ready");

        const { name, email, phone, message } = req.body;
        const lead = await Lead.create({ name, email, phone, message });
        console.log("🟢 Lead Created:", lead._id.toString());
        console.log("======================================\n");

        return res.status(201).json({ success: true, id: lead._id });
    } catch (err) {
        console.error("❌ Error in createLead:", err.message || err);
        next(err);
    }
}

module.exports = { createLead };
