export default initFile((plugin) => {
  const darkmode = native.getPref("enableDarkmode") === "true";

  plugin.loadCSS({
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
});
