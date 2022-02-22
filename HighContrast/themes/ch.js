initFile((plugin) => {
  plugin.loadCSS({
    "@global": {
      ".toolbar--material, .tabbar--material, :checked + .switch--material__toggle > .switch--material__handle, :checked + .switch--material__toggle, .btn-lila":
        {
          background: "linear-gradient(-45deg, #EE7752, #E73C7E, #23D5AB)",
          backgroundSize: "400% 400%",
          animation: "change  10s ease-in-out infinite",
        },
      ".btn-lila": {
        border: "none",
      },
      "@keyframes change": {
        "0%": {
          backgroundPosition: "0 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
        "100%": {
          backgroundPosition: "0 50",
        },
      },
    },
  });
});
