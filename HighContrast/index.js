initFile((plugin) => {
  if (native.version.require(141)) {
    plugin.require("settings.js");

    switch (plugin.getPluginPref("theme")) {
      case "hc":
        require("themes/hc.js");
        break;
      case "ch":
        require("themes/ch.js");
        break;

      default:
        break;
    }
console.log(__dirname)
    console.log("fdgdfgfg");

    if (plugin.getPluginPref("displayDownloadButtoninFAB") === "true") {
      document.getElementById("download-app").style.display = "block";
    }

    document.getElementById("download-app").addEventListener("click", () => {
      console.log(`Author of this project is ${plugin.getAuthor}`);
    });
  } else {
    console.log("You need the 1.4.1 version to make the plugin running");
  }
});
