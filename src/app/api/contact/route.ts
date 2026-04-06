import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, mobile, service, message } = await req.json();

    // ── Basic server-side guard ──────────────────────────────────────
    if (!name || !mobile || !service || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ── Build email body ─────────────────────────────────────────────
    const emailBody = `
New Consultation Request
━━━━━━━━━━━━━━━━━━━━━━━━

Name     : ${name}
Mobile   : ${mobile}
Service  : ${service}
Message  : ${message}

━━━━━━━━━━━━━━━━━━━━━━━━
This request was submitted via the Blacksila website.
    `.trim();

    // ── Nodemailer transporter (Gmail SMTP) ──────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,   // e.g. blacksila.services@gmail.com
        pass: process.env.GMAIL_PASS,   // Gmail App Password (not account password)
      },
    });

    await transporter.sendMail({
      from: `"Blacksila Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,       // send to the same inbox
      replyTo: `${name} <noreply@blacksila.in>`,
      subject: "New Consultation Request",
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] email error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
