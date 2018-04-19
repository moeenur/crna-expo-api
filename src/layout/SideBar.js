import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, List, ListItem, Icon, Left, Body, Text } from "native-base";
import { Actions } from "react-native-router-flux";

class SideBar extends React.Component {
  render() {
    const drawerCoverImg = require("./../assets/images/drawer-cover.jpg");
    const appLogo = require("./../assets/images/app-logo.png");
    return (
      <Container>
        <Content style={{ backgroundColor: "#FFFFFF" }}>
          <Image
            source={drawerCoverImg}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }} />
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={appLogo}
          />
          <List>
            <ListItem onPress={() => {
              Actions.home();
            }} icon>
              <Left>
                <Icon name="home" />
              </Left>
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => {
              Actions.list_menus();
            }} icon>
              <Left>
                <Icon name="menu" />
              </Left>
              <Body>
                <Text>Menus</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => {
              Actions.login();
            }} icon>
              <Left>
                <Icon name="woman" />
              </Left>
              <Body>
                <Text>Login</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
