import React from "react";
import { Container } from "native-base";
import SideBar from "./SideBar";
import Routes from "./../Routes";
// import HeaderTemplate from "./HeaderTemplate";
import FooterTemplate from "./FooterTemplate";

class MainTemplate extends React.Component {
  render() {
    return (
      <Container>
        <Routes />
        <FooterTemplate />
      </Container>
    );
  }
}

export default MainTemplate;
