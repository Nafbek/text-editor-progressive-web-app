const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
const instancePrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  instancePrompt = event;
  butInstall.style.display = "block";
});

disableInAppInstallPrompt = () => {
  instancePrompt = null;
  butInstall.style.display = "none";
};

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (!instancePrompt) {
    return;
  }
  disableInAppInstallPrompt();
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  event.preventDefault();
  disableInAppInstallPrompt();
});
