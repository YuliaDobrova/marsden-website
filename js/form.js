const sendFormBtn = document.querySelector(".send-message");
const form = document.querySelector("#form");

function sendUserInfo(e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
    })
    .catch((error) => alert(error));
}

sendFormBtn.addEventListener("click", function () {
  form.addEventListener("submit", sendUserInfo);
});
