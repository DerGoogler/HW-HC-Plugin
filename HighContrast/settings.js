(function () {
  const hc = new HWPlugin("HighContrast");

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
          key: "enableHighContrastCard",
          type: "switch",
          text: string.enableHCstring,
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
