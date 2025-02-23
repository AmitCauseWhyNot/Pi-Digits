import { ThemeProvider, Text, useColorMode } from "theme-ui";
import { FormattedMessage } from "react-intl";
import { theme } from "../common/theme";

const Title = () => {
  // Get the current color mode from Theme UI
  const [colorMode] = useColorMode();

  return (
    <ThemeProvider theme={theme}>
      <Text
        sx={{
          color: colorMode === "dark" ? "white" : "black", // Set color based on color mode
          fontStyle: "normal",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        <FormattedMessage id="title" />
        {/* Display the first n-digits of Pi */}
      </Text>
    </ThemeProvider>
  );
};

export default Title;

