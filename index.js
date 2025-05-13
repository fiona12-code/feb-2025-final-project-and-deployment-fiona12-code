function makeAppointment(event) {
  event.preventDefault();
  let appointmentElement = document.querySelector("#appointment-form");
  appointmentElement.classList.toggle("hidden-form");
}

let button = document.querySelector("#appointment-button");
button.addEventListener("click", makeAppointment);

// Required fields validation in the appointment form
function validateForm(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let date = document.querySelector("#date").value;
  let time = document.querySelector("#time").value;

  if (!name || !email || !date || !time) {
    alert("Please fill in all required fields.");
    return false;
  }
  alert("Appointment booked successfully!");
  return true;
}

let form = document.querySelector("#appointment-form");
form.addEventListener("submit", validateForm);

// Required fields validation in the patient Info form
function validatePatientForm(event) {
  event.preventDefault();
  let name = document.querySelector("#patient-name").value;
  let email = document.querySelector("#patient-email").value;
  let phone = document.querySelector("#patient-phone").value;

  if (!name || !email || !phone) {
    alert("Please fill in all required fields.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
