import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Create Nodemailer transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    //
    // 1. Send email to YOU (Sumit)
    //
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "mauryasumit0185@gmail.com",
      subject: `New message from ${email}: ${subject}`,
      html: `
        <h2>New Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    //
    // 2. Send confirmation email to USER
    //
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thanks for contacting me!`,
      html: `
        <h1>Thanks for reaching out!</h1>
        <p>I’ve received your message and will get back to you as soon as possible.</p>
        <p>Have a great day!</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
