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
        const options = {
          method: 'POST',
          headers: {
            'X-Buttondown-Collision-Behavior': "overwrite",
            accept: 'application/json',
            authorization: 'Token ' + context.env.BUTTONDOWN_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ email_address: data["email"] })
        };
        
        fetch('https://api.buttondown.com/v1/subscribers', options)
          .then(response => response.json())
          .catch(err => data["action"] = "error" );
      }
    }
  
    return Response.redirect("https://bryanrieger.com/thank-you#" + data["action"], 303);
  }
  
  export const onRequest = [submitForm];


