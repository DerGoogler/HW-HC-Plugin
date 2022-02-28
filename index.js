initFile(
  (plugin) => {
    require("settings.js");

    switch (plugin.getPluginPref("theme")) {
      case "hc":
        require("themes/hc.js");
        break;
      case "ch":
        require("themes/ch.js");
        break;
      case "blue":
        require("themes/blue.js");
        break;

      default:
        break;
    }

    if (plugin.getPluginPref("editable") === "true") {
      document.body.setAttribute("contenteditable", "true");
    }
  },
  {
    requireVersion: 141,
  }
);
