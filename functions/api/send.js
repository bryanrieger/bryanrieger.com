import { Resend } from "resend";

const submitForm = async (context) => {
  const resend = new Resend(context.env.RESEND_API_KEY);

  try {
    const input = await context.request.formData();
  } catch (error) {
    return Response.redirect("https://bryanrieger.com/thank-you", 303);
  }

  let data = {}
  for (let [key, value] of input) {
    let tmp = data[key];
    if (tmp === undefined) {
      data[key] = value;
    } else {
      data[key] = [].concat(tmp, value);
    }
  }

  if (data["spambot"] != "on" && data["action"] == "send") {
    if (data["name"] != "" && data["email"] != "" & data["message"] != "") {
      let body = "";
      const message = await resend.emails.send({
        from: 'Wendell the Web Form <hello@bryanrieger.com>',
        to: 'bryan@yiibu.com',
        subject: 'Someone sent you a message!',
        html: '<h2>' + data["name"] + ' has sent you a message!</h2><p><strong>From: </strong> ' + data["name"] + ' <em>&lt;' + data["email"] + '&gt;</em></p><p>' + data["message"] + '</p>'
      });
    }
  }

  return Response.redirect("https://bryanrieger.com/thank-you#send", 303);
}

export const onRequest = [submitForm];
