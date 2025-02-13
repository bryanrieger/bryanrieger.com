const submitForm = async (context) => {

  
    let input = await context.request.formData();
  
    let data = {}
    for (let [key, value] of input) {
      let tmp = data[key];
      if (tmp === undefined) {
        data[key] = value;
      } else {
        data[key] = [].concat(tmp, value);
      }
    }
  
    if (data["spambot"] != "on" && data["action"] == "subscribe") {
      if (data["email"] != "") {
        const formData = new FormData();
        const postURL = context.env.BUTTONDOWN_FORM_ACTION;
        formData.append("email", data["email"]);

        try {
          const response = await fetch(postURL, {
            method: "POST",
            body: formData,
          });
        } catch (e) {
          data["action"] = "error"
        }

      }
    }
  
    return Response.redirect("https://bryanrieger.com/thank-you#" + data["action"], 303);
  }
  
  export const onRequest = [submitForm];