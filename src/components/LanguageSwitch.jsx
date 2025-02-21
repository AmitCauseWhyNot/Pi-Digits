import { useContext } from "react";
import { Flex, Text } from "theme-ui";

import { SUPPORTED_LOCALES } from "../common/intl/Localization";
import { LocalizationContext } from "../common/intl/LocalizationContext";
import IconGlobe from "./icons/IconGlobe";

const LanguageSwitch = (props) => {
  const { locale, switchLanguage } =
    useContext(LocalizationContext);

  return (
    <Flex
      onClick={() => switchLanguage(locale)}
      sx={{
        borderRadius: ".5em",
        padding: ".5em",
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        ":hover": {
          outline: "2px solid black",
          cursor: "pointer",
        },
        ...props.sx,
      }}
    >
      <IconGlobe />
      <Text ml="0.25rem" sx={{ fontSize: "1rem", color: "white" }}>
        { SUPPORTED_LOCALES[locale] }
      </Text>
    </Flex>
  );
};

export default LanguageSwitch;
