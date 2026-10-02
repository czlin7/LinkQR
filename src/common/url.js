(() => {
    const preferenceKey = "upgradeHttpToHttps";
    let upgradeEnabled = true;
    let updatedDuringLoad = false;

    const preferenceReady = browser.storage.local.get(preferenceKey).then((preferences) => {
        if (!updatedDuringLoad) {
            upgradeEnabled = preferences[preferenceKey] !== false;
        }
    }).catch((error) => {
        console.error("Could not read LinkQR settings:", error);
    });

    browser.storage.onChanged.addListener((changes, areaName) => {
        const change = changes[preferenceKey];
        if (areaName === "local" && change) {
            updatedDuringLoad = true;
            upgradeEnabled = change.newValue !== false;
        }
    });

    window.LinkQRUrl = {
        async applyHttpsPreference(url) {
            await preferenceReady;
            if (typeof url !== "string" || !upgradeEnabled) {
                return url;
            }

            return url.replace(/^http:\/\//i, "https://");
        }
    };
})();
