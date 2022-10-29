const refs = {
   form: document.querySelector('.login-form'),
};

refs.form.addEventListener("submit", onInputChange);

function onInputChange(event) {
   event.preventDefault();
   const {
    elements: {email, password}
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   alert(`Всі поля повинні бути заповненні`)
  }

  const user = {email: email.value, password: password.value};
  console.log(user);
  event.currentTarget.reset();
};

