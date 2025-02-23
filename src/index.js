import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";

import MindRouter from "./common/router";
import { LocalizationProvider } from "./common/intl/LocalizationContext";
import store from "./redux/store";

import { ThemeProvider } from "theme-ui";
import { theme } from "./common/theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider>
        <Provider store={store}>
          <Global
            styles={() => ({
              body: {
                overflowY: "visible !important",
                margin: 0,
                fontFeatureSettings: "'lnum'",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              },
            })}
          />
          <MindRouter />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
