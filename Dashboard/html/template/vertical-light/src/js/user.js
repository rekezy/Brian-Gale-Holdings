function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const id = getCookie("Bra**&&__hold");
// const id = "668a4e35d91c75ef3cf9a564"
fetch(`http://localhost:8000/user/${id}`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("name").innerHTML = data.name
    document.getElementById("email").innerHTML =`<span class="icon-Mail-notification me-5 text-primary"><span class="path1"></span><span class="path2"></span></span>${data.email}` 
  });
