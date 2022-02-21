(function (pluginName = "HighContrast") {
  const hc = new HWPlugin(pluginName);

  const string = hc.strings({
    de: {
      enableHCstring: "Aktivire Hohen Kontrast",
      displayDLbutton: "Download button anzeigen",
    },
    en: {
      enableHCstring: "Enable high contrast",
      displayDLbutton: "Display download button",
    },
  });

  hc.addSettings([
    {
      title: "HC Plugin",
      content: [
        {
          key: "theme",
          type: "select",
          text: "Theme",
          selectDefaultValue: "none",
          selectValue: [
            {
              text: "High contrast",
              value: "hc",
            },
            {
              text: "Color change",
              value: "ch",
            },
          ],
        },
        {
          key: "displayDownloadButtoninFAB",
          type: "switch",
          text: string.displayDLbutton,
        },
      ],
    },
  ]);
})();
