document.querySelectorAll("[data-locale]").forEach((element) => {
    const message = browser.i18n.getMessage(element.dataset.locale);
    if (message) {
        element.textContent = message;
    }
});

const httpsPreference = document.getElementById("upgradeHttpToHttps");
const saveStatus = document.getElementById("save-status");

browser.storage.local.get("upgradeHttpToHttps").then((settings) => {
    httpsPreference.checked = settings.upgradeHttpToHttps !== false;
}).catch((error) => {
    console.error("Could not load LinkQR settings:", error);
});

httpsPreference.addEventListener("change", async () => {
    try {
        await browser.storage.local.set({
            upgradeHttpToHttps: httpsPreference.checked
        });
        saveStatus.textContent = browser.i18n.getMessage("settingsSaved");
    } catch (error) {
        console.error("Could not save LinkQR settings:", error);
        saveStatus.textContent = browser.i18n.getMessage("settingsSaveFailed");
    }
});
