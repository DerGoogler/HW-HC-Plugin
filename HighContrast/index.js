(function (pluginName = "HighContrast") {
  if (native.version.require(141)) {
    const hc = new HWPlugin(pluginName);

    require("settings.js");

    switch (hc.getPluginPref("theme")) {
      case "hc":
        require("themes/hc.js");
        break;
      case "ch":
        require("themes/ch.js");
        break;

      default:
        break;
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
