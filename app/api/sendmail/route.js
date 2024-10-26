
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, phone, company, honeypot } = req.body;

//     // Check for honeypot field (bot detection)
//     if (honeypot) {
//       return res.status(400).json({ error: 'Bot detected' });
//     }

//     // Create nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     try {
//       // Send email using nodemailer
//       const mailOptions = {
//         from: process.env.SMTP_FROM_EMAIL, // Sender address
//         to: process.env.SMTP_TO_EMAIL, // List of recipients
//         subject: 'New Contact Form Submission',
//         html: `
//           <h1>New Contact Form Submission</h1>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Company:</strong> ${company}</p>
//         `,
//       };

//       await transporter.sendMail(mailOptions);

//       return res.status(200).json({ success: true, message: 'Message sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ success: false, message: 'Failed to send message.' });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {

      const { name, email, phone, company} = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        })

        const mailOption = {
            from: process.env.SMTP_FROM_EMAIL, // Sender address
            to: process.env.SMTP_TO_EMAIL, // List of recipients
            subject: "ERP Inquiry ",
            html: `
                      <h1>New Contact Form Submission</h1>
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Phone:</strong> ${phone}</p>
                      <p><strong>Company:</strong> ${company}</p>
                    `,
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}