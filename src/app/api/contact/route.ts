import { Resend } from "resend";
import { NextResponse } from "next/server";

const FROM = "Dennett Labs <noreply@mail.dennettlabs.com>";
const DEFAULT_INBOX = "support@dennettlabs.com,daniel@dennettlabs.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  return new Resend(key);
}

function inboxRecipients(): string[] {
  const raw = process.env.CONTACT_INBOX || DEFAULT_INBOX;
  const list = raw
    .split(",")
    .map((address) => address.trim())
    .filter((addr) => EMAIL_PATTERN.test(addr));
  return list.length > 0 ? list : DEFAULT_INBOX.split(",");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function brandedHtml(inner: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a1d2e; max-width: 600px; margin: 40px auto; padding: 40px 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://dennettlabs.com/dennettlabslogo.png" alt="Dennett Labs Logo" style="width: 48px; height: 48px; margin-bottom: 16px; display: inline-block;" />
        <h1 style="color: #1a1d2e; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.02em; text-transform: uppercase;">DENNETT LABS</h1>
      </div>
      ${inner}
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
      <p style="font-size: 14px; color: #64748b; margin: 0;">Best,<br/>The Dennett Labs Team</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: { message: "Invalid JSON request body." } },
        { status: 400 }
      );
    }

    const website = typeof body?.website === "string" ? body.website.trim() : "";

    // Honeypot: bots fill hidden fields; succeed silently without sending mail.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
    const company = typeof body?.company === "string" ? body.company.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const process = typeof body?.process === "string" ? body.process.trim() : "";

    if (!firstName || !lastName || !company || !email || !process) {
      return NextResponse.json(
        { error: { message: "All fields are required." } },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: { message: "Please enter a valid work email." } },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const fullName = `${firstName} ${lastName}`;
    const teamText = [
      `New CRANE pilot inquiry from ${fullName}`,
      "",
      `Name: ${fullName}`,
      `Company / Facility: ${company}`,
      `Work email: ${email}`,
      "",
      "Industrial constraints:",
      process,
    ].join("\n");

    const teamHtml = brandedHtml(`
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">New CRANE pilot inquiry from <strong>${escapeHtml(fullName)}</strong>.</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 8px;"><strong>Company / Facility:</strong> ${escapeHtml(company)}</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 8px;"><strong>Work email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #2b5ea8; text-decoration: none;">${escapeHtml(email)}</a></p>
      <p style="font-size: 16px; line-height: 1.6; margin: 20px 0 8px;"><strong>Industrial constraints:</strong></p>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; font-family: monospace, -apple-system, sans-serif;">${escapeHtml(process)}</div>
    `);

    const teamResult = await resend.emails.send({
      from: FROM,
      to: inboxRecipients(),
      replyTo: email,
      subject: `Pilot inquiry: ${fullName} — ${company}`,
      text: teamText,
      html: teamHtml,
    });

    if (teamResult.error) {
      console.error("Contact team email failed:", teamResult.error);
      return NextResponse.json(
        { error: { message: "Failed to send your inquiry. Please try again later." } },
        { status: 500 }
      );
    }

    // Visitor acknowledgement — log failure without failing the overall request.
    try {
      const visitorResult = await resend.emails.send({
        from: FROM,
        to: email,
        replyTo: "support@dennettlabs.com",
        subject: "We received your CRANE pilot inquiry — Dennett Labs",
        text: `Hi ${firstName},\n\nThank you for sharing your industrial constraints. We received your inquiry and will review the process details you sent. We will be in touch shortly.\n\nBest,\nThe Dennett Labs Team`,
        html: brandedHtml(`
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hi ${escapeHtml(firstName)},</p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for sharing your industrial constraints for <strong>${escapeHtml(company)}</strong>. We received your inquiry and our team is reviewing the process parameters you submitted.</p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">We will be in touch shortly with next steps.</p>
          <p style="font-size: 16px; line-height: 1.6; margin: 0;">If you have additional constraints, technical documents, or questions in the meantime, feel free to reply directly to this email.</p>
        `),
      });

      if (visitorResult.error) {
        console.error("Contact visitor ack failed:", visitorResult.error);
      }
    } catch (ackError) {
      console.error("Contact visitor ack threw error:", ackError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error.";
    console.error("Contact API error:", error);
    return NextResponse.json({ error: { message } }, { status: 500 });
  }
}
