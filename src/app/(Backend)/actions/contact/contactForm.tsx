"use server";
import nodemailer from "nodemailer";

export default async function ContactForm(state: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // const transporter = nodemailer.createTransport({
    //   host: "s1384.syd1.mysecurecloudhost.com:2096",
    //   port: 465,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: "support@imagewebsite.eduresearchers.com", // your SMTP username
    //     pass: "o-%_m71U!?mD", // your SMTP password
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "s1384.syd1.mysecurecloudhost.com",
      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        // port:
        user: "support@imagewebsite.eduresearchers.com",
        pass: "o-%_m71U!?mD",
      },
    });

    let mailOptions = {
      from: "support@gogrades.org",
      to: "support@imagewebsite.eduresearchers.com",
      subject: "Contact Us Form",
      text: "Contact Us Form",
      html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <p><b>Details:</b></p>
                    <ul>
                        <li><b>Name:</b> ${name}</li>
                        <li><b>Email:</b> ${email}</li>
                        <li><b>Phone:</b> ${phone}</li>
                        <li><b>Subject:</b> ${subject}</li>
                        <li><b>Message:</b> ${message}</li>
                    </ul>
                </div>
    `,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
        return { error: "Something Went Wrong" };
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });

    return { success: "Form Submitted Successfully" };
  } catch (error) {
    return { error: "Something Went Wrong" };
  }
}
