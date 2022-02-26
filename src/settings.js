export default initFile((plugin) => {
  plugin.addSettings([
    {
      title: "Settings",
      content: [
        {
          key: "theme",
          type: "select",
          text: "Theme",
          selectDefaultValue: "none",
          callback: (keepDefaultFunction) => {
            keepDefaultFunction;
            native.alert("Please reload the app");
          },
          selectValue: [
            {
              text: "High contrast",
              value: "hc",
            },
            {
              text: "Color change",
              value: "ch",
            },
            {
              text: "Blue",
              value: "blue",
            },
          ],
        },
      ],
    },
  ]);
});
