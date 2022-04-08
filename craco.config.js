const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              //Colors
              "@primary-color": "#7422c5",
              "@text-color-secondary": "#ec6bf8",

              //Button
              "@font-size-base": "12px",
              "@font-size-sm": "10px",
              "@btn-padding-horizontal-sm": "12px",

              //Button Link
              "@btn-link-hover-bg": "transparent",

              //Checkbox
              "@checkbox-color": "@text-color-secondary",
              "@checkbox-border-width": "1px",
              "@checkbox-border-color": "red",

              //Radio
              "@radio-dot-color": "@text-color-secondary",

              //! Modal
              "@modal-close-color": "@primary-color",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
