(function (pluginName = "HighContrast") {
  if (native.version.require(141)) {
    const hc = new HWPlugin(pluginName);

    require("settings.js");

    Android = "kikk";
    console.log(Android);

    const darkmode = native.getPref("enableDarkmode") === "true";

    if (hc.getPluginPref("enableHighContrastCard") === "true") {
      hc.loadCSS({
        "@global": {
          ".card": {
            border: !darkmode
              ? `1px solid rgb(74 20 140)`
              : "1px solid rgb(187 134 252)",
          },

          ".card-header": {
            borderBottom: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
            backgroundColor: !darkmode
              ? "rgba(74, 20, 140,.03)"
              : "rgba(187, 134, 252,.03)",
          },

          "ons-input .text-input, ons-search-input .search-input": {
            border: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
          },

          ".list--inset": {
            border: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
          },

          ".page--windows": {
            border: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
          },

          ".action-sheet--material": {
            border: native.isAndroid
              ? "none"
              : !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
            borderRadius: native.isAndroid ? "none" : "8px",
            borderTop: "none",
          },

          ".dialog--material": {
            border: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
          },

          ".list--inset": {
            border: !darkmode
              ? "1px solid rgb(74 20 140)"
              : "1px solid rgb(187 134 252)",
          },
        },
      });
    }

    if (hc.getPluginPref("displayDownloadButtoninFAB") === "true") {
      document.getElementById("download-app").style.display = "block";
    }

    document.getElementById("download-app").addEventListener("click", () => {
      console.log(`Author of this project is ${hc.getAuthor}`);
    });
  } else {
    console.log("You need the 1.4.1 version to make the plugin running");
  }
})();
