import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Button, Image, Flex, Text } from "theme-ui";
import { doLogout } from "../redux/slices/AuthSlice";

import pi_header from "../assets/images/pi_header.png";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const dispatch = useDispatch();
  const setErrorState = useState(null);

  const onLogoutClick = () => {
    try {
      dispatch(doLogout());
    } catch (error) {
      setErrorState(error);
    }
  }

  return (
    <Flex
      id="Pi_Flex"
      sx={{
        backgroundColor: "DeepSkyBlue ",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "141px",
        py: "10px",
      }}
    >
      <Text color="white" sx={{ width: "10rem" }}>
        <FormattedMessage
          id="lbl.formateDate"
          values={{ dateParam: new Date() }}
        />
      </Text>

      <Image src={pi_header} sx={{ marginLeft: "12em" }} />

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
            fontFamily: "Arial",
            ":hover": {
              outline: "2px solid black",
              cursor: "pointer"
            }
          }}
          onClick={onLogoutClick}
        >
          <FormattedMessage id="lbl.logout" />
        </Button>

        <LanguageSwitch sx={{ width: "10rem" }} />
      </Flex>
    </Flex>
  );
};


export default Header;
