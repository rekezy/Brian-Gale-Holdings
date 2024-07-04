document.getElementById("register_button").addEventListener("click", (e) => {
       e.preventDefault();
       console.log("hello")
  const firstName = document.getElementById("firstName");
  const referralCode = document.getElementById("referral");
  const userName = document.getElementById("userName");
  const lastName = document.getElementById("lastName");
  const country = document.getElementById("country")
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const phone = document.getElementById("phone")

  
const formData = new FormData()
formData.append("firstName",firstName.value)
formData.append("lastName",lastName.value)
formData.append("email",email.value)
formData.append("phone",phone.value)
formData.append("country",country.value)
formData.append("referralCode",referralCode.value)
formData.append("userName",userName.value)
formData.append("password",password.value)



  fetch("http://localhost:8000/register", {
    method: "POST",
    body: formData
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
/*JSON.stringify({
      
        firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      country: country.value,
      referralCode: referralCode.value,
      userName: userName.value,
    }), */