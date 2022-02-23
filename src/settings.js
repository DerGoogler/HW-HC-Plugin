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
      ],
    },
  ]);
});
