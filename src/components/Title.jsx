import { Text } from "theme-ui";
import { FormattedMessage } from "react-intl";
import "./styles/Layout.css"

const Title = () => {
  return (
    <Text
      sx={{
        color: "var(--main-text-color)",
        fontStyle: "normal",
        fontSize: "50px",
        fontWeight: "bold",
      }}
    >
      <FormattedMessage id="title" />
      {/* Display the first n-digits of Pi */}
    </Text>
  );
};

export default Title;
