import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    res.status(500).json({ error: "Email service is not configured." });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Manuela Missions Website <onboarding@resend.dev>",
      to: "info@manuelamissions.com",
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #003580; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Message — Manuela Missions Website</h2>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #444;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 16px; text-align: center;">
            Sent via the Manuela Missions contact form. Reply directly to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(500).json({ error: "Failed to send message. Please try again." });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
