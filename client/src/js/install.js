const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
let instancePrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  console.log("this is button", event);
  instancePrompt = event;
  butInstall.removeAttribute("hidden");
});

const disableInAppInstallPrompt = () => {
  instancePrompt = null;
  butInstall.setAttribute("hidden", "");
};

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (instancePrompt) {
    instancePrompt.prompt();
  
  }
  disableInAppInstallPrompt();
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  event.preventDefault();
  disableInAppInstallPrompt();
});
