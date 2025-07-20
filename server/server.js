require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "win.masrafi000@gmail.com",
      subject: `Message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
