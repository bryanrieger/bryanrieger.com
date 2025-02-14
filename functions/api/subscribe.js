const submitForm = async (context) => {
  
    var input;
    try {
      input = await context.request.formData();
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
    let json = {};
    if (data["spambot"] != "on" && data["action"] == "subscribe") {
      if (data["email"] != "") {
        const options = {
          method: 'POST',
          headers: {
            'X-Buttondown-Collision-Behavior': "overwrite",
            'accept': 'application/json',
            'authorization': 'Token ' + context.env.BUTTONDOWN_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ email_address: data["email"] })
        };

        try {
          const response = await fetch('https://api.buttondown.com/v1/subscribers', options);
          if (!response.ok) {
            data["action"] = "error";
          }
          json = await response.json();
        } catch (error) {
          data["action"] = "error";
        }

      }
    }

    return Response.redirect("https://bryanrieger.com/thank-you#" + data["action"], 303);
  }
  
  export const onRequest = [submitForm];


