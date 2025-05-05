let overlay = null;
let messageBox = null;
let hideTimeout = null;

function ShowMessage(text) {
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const infoBox = document.createElement("div");
    infoBox.classList.add("logon_information");

    const circle = document.createElement("div");
    circle.classList.add("circle", "success");
    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-check-circle");
    circle.appendChild(icon);

    messageBox = document.createElement("div");
    messageBox.classList.add("logon_information_text");

    infoBox.appendChild(circle);
    infoBox.appendChild(messageBox);
    overlay.appendChild(infoBox);
    document.body.appendChild(overlay);
  }

  if (hideTimeout) clearTimeout(hideTimeout);

  messageBox.innerHTML = text;

  overlay.classList.remove("hidden", "fade-out");
  void overlay.offsetWidth;
  overlay.classList.add("fade-out");

  hideTimeout = setTimeout(() => {
    overlay.classList.add("hidden");
  }, 3000);
}
