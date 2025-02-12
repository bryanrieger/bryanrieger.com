import { Resend } from "resend";

const submitForm = async (context) => {
  const resend = new Resend(context.env.RESEND_API_KEY);
  
  const data = await resend.emails.send({
    from: 'Contact Form <hello@bryanrieger.com>',
    to: 'bryan@yiibu.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  
  return Response.json(data);
}

export const onRequest = [submitForm];
