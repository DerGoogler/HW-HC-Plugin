initFile(
  (plugin) => {
    require("./settings");

    switch (plugin.getPluginPref("theme")) {
      case "hc":
        require("./themes/hc");
        break;
      case "ch":
        require("./themes/ch");
        break;

      default:
        break;
    }
  },
  {
    requireVersion: 141,
  }
);
