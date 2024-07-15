document.getElementById("login_button").addEventListener("click", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  console.log("hello");

  console.log(email.value, password.value);

  fetch("https://brain-backend-jxmx.onrender.com/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.user) {
        document.cookie = `Bra**&&__hold=${data.user._id}; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/`;
        location.href =
          "./Dashboard/html/template/vertical-light/main/index2.html";
      } else {
        alert(data.message);
      }
    });
});

document.getElementById("business_register").addEventListener("click ", () => {
  const name = document.getElementById("name").value;
  const businessName = document.getElementById("business_name").value;
  const businessNumber = document.getElementById("business_number").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert(
    `Registered with Username: ${username}, Email: ${email} password: ${password}`
  );
  console.log(
    `Registered with Username: ${username}, Email: ${email} password: ${password}`
  );
  console.log("Hello");
});

//document.getElementById('').addEventListener('click', async (e) => {
//  e.preventDefault();
// const firstName =document.getElementById('firstName').value
// const referral =document.getElementById('referral').value
// const username = document.getElementById('Username').value;
// const lastName =document.getElementById('lastName').value
// const pin =document.getElementById('pin').value
// const email = document.getElementById('Email').value;
// const password = document.getElementById('Password').value;

//  console,log('hello')

//  console.log(firstName.value, referral.value, username.value, lastName, pin, email, password)

//  try {
// const response = await fetch('http://localhost:8000/register', {
//    method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify({ username, email, password, firstName, referral, username, lastName,pin })
//  });

// const data = await response.json();

//  if (response.ok) {
//    localStorage.setItem('token', data.token);
//     window.location.href = 'dashboard.html';
//  } else {
//    alert(data.msg);
// }
// } catch (error) {
//  console.error('Error:', error);
//  }
// });
