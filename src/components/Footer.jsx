import { Text, Flex } from "theme-ui";
import "./styles/Layout.css";

const Footer = () => {
  return (
    <Flex
      id="Footer"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--marginal-background-color)",
        width: "100%",
        height: "128px",
      }}
    >
      <Text
        sx={{
          fontSize: "75px",
          fontFamily: "Arial",
          fontWeight: "bold",
        }}
      >
        @Mind CTI
      </Text>
    </Flex>
  );
};

export default Footer;
