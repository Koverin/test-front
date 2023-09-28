document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms.registration;
  const phoneInput = form.elements.phone;

  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "pl",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = form.elements.first_name.value;
    const lastName = form.elements.last_name.value;
    const email = form.elements.email.value;
    const phone = iti.getNumber();

    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all fields for Form .");
    } else if (
      !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]+$/.test(firstName) ||
      !/^[A-Za-zżźćńółęąśŻŹĆĄŚŚŁÓŃ\s-]+$/.test(lastName)
    ) {
      alert(
        "First name and last name for Form  can only contain letters, spaces, and hyphens."
      );
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address for Form .");
    } else if (!iti.isValidNumber()) {
      alert("Please enter a valid phone number for Form .");
    } else {
      alert("Form  is valid. Submitting...");
      form.submit();
    }
  });

  const form1 = document.forms.registration1;
  const phoneInput1 = form1.elements.phone;

  const iti1 = window.intlTelInput(phoneInput1, {
    initialCountry: "pl",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
  });

  form1.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName1 = form1.elements.first_name.value;
    const lastName1 = form1.elements.last_name.value;
    const email1 = form1.elements.email.value;
    const phone1 = iti1.getNumber();

    if (!firstName1 || !lastName1 || !email1 || !phone1) {
      alert("Please fill in all fields for Form .");
    } else if (
      !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]+$/.test(firstName1) ||
      !/^[A-Za-zżźćńółęąśŻŹĆĄŚŚŁÓŃ\s-]+$/.test(lastName1)
    ) {
      alert(
        "First name and last name for Form  can only contain letters, spaces, and hyphens."
      );
    } else if (!/\S+@\S+\.\S+/.test(email1)) {
      alert("Please enter a valid email address for Form .");
    } else if (!iti1.isValidNumber()) {
      alert("Please enter a valid phone number for Form .");
    } else {
      alert("Form  is valid. Submitting...");
      form1.submit();
    }
  });
});
