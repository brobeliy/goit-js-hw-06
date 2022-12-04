const formUser = document.querySelector(".login-form");

formUser.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Не все поля заполнены");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }
  event.currentTarget.reset();
}

