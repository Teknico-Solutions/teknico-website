import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {

  const res = await request.json();
  console.log(process.env.EMAIL_ADDRESS);
  console.log(process.env.EMAIL_PASSWORD);
  const { name, email, service, phone, message } = res
  console.log(name)
  const mail = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.TO_EMAIL_ADDRESS, // Change to email address that you want to receive messages on
    subject: "New Message from Teknico.dev",
    html: `
    <div style="max-width:600px;background-color:#E7E7E7;color:black;padding:30px;">
      <div style="margin:10px 20px;">
        <p style="font-size:14px;font-weight:500;margin:0;">Name : </p>
        <p style="font-size:20px;font-weight:600;margin:0;">${name}</p>
      </div>
      <div style="margin:10px 20px;">
        <p style="font-size:14px;font-weight:500;margin:0;">Email : </p>
        <p style="font-size:20px;font-weight:600;margin:0;">${email}</p>
      </div>
      <div style="margin:10px 20px;">
        <p style="font-size:14px;font-weight:500;margin:0;">Service : </p>
        <p style="font-size:20px;font-weight:600;margin:0;">${service}</p>
      </div>
      <div style="margin:10px 20px;">
        <p style="font-size:14px;font-weight:500;margin:0;">Phone : </p>
        <p style="font-size:20px;font-weight:600;margin:0;">${phone}</p>
      </div>
      <div style="margin:10px 20px;">
        <p style="font-size:14px;font-weight:500;margin:0;">Message : </p>
        <p style="font-size:20px;font-weight:600;margin:0;">${message}</p>
      </div>
    </div>
    `,

  };

  console.log(mail);

  // ignore typescript error
  // @ts-ignore
  transporter.sendMail(mail, (err, data) => {
    console.log(err, data);
    if (err) {
      return {
        status: "fail",
      };
    } else {
      return {
        status: "success",
      };
    }
  });
}

