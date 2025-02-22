import { FormattedMessage } from "react-intl";
import { Flex, Text, Spinner, Button } from "theme-ui";

const RenderDigits = ({
  digitsToDisplay = "3.",
  errorType,
  showSpinner,
  highlightedChar = "", // Accept a single character to highlight
}) => {
  const renderTextWithHighlight = () => {
    return digitsToDisplay.split("").map((char, index) => {
      // If the current character matches the highlightedChar, apply the highlight
      if (char === highlightedChar) {
        return (
          <span
            key={index}
            style={{
              backgroundColor: "yellow", // Highlight color
              fontWeight: "bold",
              color: "black", // Text color for highlighted character
            }}
          >
            {char}
          </span>
        );
      }
      // For non-highlighted characters, return them normally
      return char;
    });
  };

  const handleCopyClicked = () => {
    window.navigator.clipboard.writeText(digitsToDisplay);
  }

  return (
    <Flex
      sx={{
        marginTop: "50px",
        background: "whitesmoke",
        border: "solid",
        borderColor: errorType.negative || errorType.tooLong ? "red" : "black",
        flexDirection: "row",
        padding: "20px",
        width: "50%",
        borderRadius: "30px",
      }}
    >
      <Text
        style={{
          fontSize: "30px",
          width: "100%",
          color: errorType.negative || errorType.tooLong ? "red" : "black",
          textAlign:
            errorType.negative || errorType.tooLong ? "center" : "start",
          wordBreak: "break-all",
          pb: "3rem",
        }}
      >
        {errorType.tooLong
          ? "Number of digits cannot be larger than 1000!"
          : errorType.negative
          ? "Number must be positive!"
          : renderTextWithHighlight()}
        {showSpinner && <Spinner size={"25px"} color={"DeepSkyBlue"} />}
      </Text>

      <Button
        sx={{
          width: "5em",
          height: "2em",
          backgroundColor: "lightgray",
          color: "black",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
          borderRadius: "30px",
          ":hover": {
            cursor: "pointer",
            outline: "2px solid black"
          }
        }}

        onClick={handleCopyClicked}
      >
        <FormattedMessage id="lbl.copybutton" />
      </Button>
    </Flex>
  );
};

export default RenderDigits;
