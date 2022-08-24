const btn = document.getElementById("button");
const form = document.getElementById("form");
emailjs.init("jzAVLBbhppWLY_Ob2");

function enableButton() {
  btn.value = "Enviar";
  btn.disabled = false;
}

function toastSuccessAlert() {
  halfmoon.initStickyAlert({
    content: "Se ha enviado el correo exitosamente",
    title: "Envio exitoso",
    alertType: "alert-success",
    fillType: "filled-lm",
  });
}

function toastDangerAlert() {
  halfmoon.initStickyAlert({
    content: "Ha ocurrido un error al enviar el correo, intente más tarde",
    title: "Falla en el envio",
    alertType: "alert-danger",
    fillType: "filled",
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";
  btn.disabled = true;

  const serviceID = "default_service";
  const templateID = "template_nvsfczu";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      enableButton();
      toastSuccessAlert();
      form.reset();
    },
    (err) => {
      enableButton();
      form.reset();
      toastDangerAlert();
    }
  );
});
