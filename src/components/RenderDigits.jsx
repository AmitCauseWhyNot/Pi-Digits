import { Flex, Text, Spinner } from "theme-ui";

const RenderDigits = ({
  digitsToDisplay = "default value",
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

  return (
    <Flex
      sx={{
        marginTop: "50px",
        background: "whitesmoke",
        border: "solid",
        borderColor: errorType.negative || errorType.tooLong ? "red" : "black",
        flexDirection: "flex-start",
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
          textAlign: errorType.negative || errorType.tooLong ? "center" : "start",
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
    </Flex>
  );
};

export default RenderDigits;
