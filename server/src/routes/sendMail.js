import nodemailer from "nodemailer";

async function sendMailRoute(fastify, options) {
  fastify.post("/api/send-email", async (request, reply) => {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      return reply.code(400).send({ success: false, error: "All fields are required" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
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
      fastify.log.info("Email sent: " + info.response);

      return reply.code(200).send({ success: true, message: "Email sent successfully!" });

    } catch (error) {
      fastify.log.error("Error sending email: ", error);
      return reply.code(500).send({ success: false, error: "Failed to send email" });
    }
  });
}

export default sendMailRoute;
