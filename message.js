let overlay = null;
let messageBox = null;
let hideTimeout = null;
let circle = null;

function ShowMessage(text, status) {
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const infoBox = document.createElement("div");
    infoBox.classList.add("logon_information");

    circle = document.createElement("div");
    circle.classList.add("circle");

    const icon = document.createElement("i");
    circle.appendChild(icon);

    messageBox = document.createElement("div");
    messageBox.classList.add("logon_information_text");

    infoBox.appendChild(circle);
    infoBox.appendChild(messageBox);
    overlay.appendChild(infoBox);
    document.body.appendChild(overlay);
  }

  // Reset tried a nastav novú podľa statusu
  circle.className = "circle";
  circle.classList.add(status);

  const icon = circle.querySelector("i");
  icon.className = "fa"; // reset ikony
  switch (status) {
    case "error":
      icon.classList.add("fa-times-circle");
      break;
    case "warning":
      icon.classList.add("fa-exclamation-circle");
      break;
    case "info":
      icon.classList.add("fa-info-circle");
      break;
    case "success":
    default:
      icon.classList.add("fa-check-circle");
      break;
  }

  messageBox.innerHTML = text;

  if (hideTimeout) clearTimeout(hideTimeout);

  overlay.classList.remove("hidden", "fade-out");
  void overlay.offsetWidth; // force reflow
  overlay.classList.add("fade-out");

  hideTimeout = setTimeout(() => {
    overlay.classList.add("hidden");
  }, 3000);
}
