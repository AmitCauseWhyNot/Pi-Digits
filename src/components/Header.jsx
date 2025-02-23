import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useColorMode, ThemeProvider, Button, Image, Flex, Text } from "theme-ui";
import { doLogout } from "../redux/slices/AuthSlice";

import pi_header from "../assets/images/pi_header.png";
import LanguageSwitch from "./LanguageSwitch";
import { theme } from "../common/theme";

const Header = () => {
  const dispatch = useDispatch();
  const setErrorState = useState(null);
  const [colorMode, setColorMode] = useColorMode();

  const onLogoutClick = () => {
    try {
      dispatch(doLogout());
    } catch (error) {
      setErrorState(error);
    }
  };

  const toggleColorMode = () => {
    // Toggle color mode between 'light' and 'dark'
    setColorMode(colorMode === "default" ? "dark" : "default");
  };

  return (
    <ThemeProvider theme={theme}>
      <Flex
        id="Pi_Flex"
        sx={{
          backgroundColor: "marginal",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "141px",
          py: "10px",
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <Button
            sx={{
              marginRight: "1em",
              backgroundColor: colorMode === 'default' ? 'black' : 'white',
              color: colorMode === 'default' ? 'white' : 'black',
              width: "10rem",
              height: "2.5rem",
              alignItems: "center",
              borderRadius: ".5em",
              ":hover": {
                outline: "2px solid buttonbackgroundcolor",
                cursor: "pointer",
              },
            }}
            onClick={toggleColorMode}
          >
            {colorMode === "default" ? (
              <FormattedMessage id="lbl.darkmode" />
            ) : (
              <FormattedMessage id="lbl.lightmode" />
            )}
          </Button>
          <Text color="white" sx={{ width: "10rem" }}>
            <FormattedMessage
              id="lbl.formateDate"
              values={{ dateParam: new Date() }}
            />
          </Text>
        </Flex>
        <Image src={pi_header} />
        <Flex sx={{ alignItems: "center" }}>
          <Button
            sx={{
              marginRight: "1em",
              backgroundColor: "gray",
              color: "white",
              width: "10rem",
              height: "2.5rem",
              alignItems: "center",
              borderRadius: ".5em",
              ":hover": {
                outline: "2px solid black",
                cursor: "pointer",
              },
            }}
            onClick={onLogoutClick}
          >
            <FormattedMessage id="lbl.logout" />
          </Button>
          <LanguageSwitch sx={{ width: "10rem" }} />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};

export default Header;
