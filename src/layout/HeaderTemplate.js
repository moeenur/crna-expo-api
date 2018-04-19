import React from "react";
import Routes from "./../Routes";
import {
  Header,
  Button,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

class HeaderTemplate extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>CRNA Expo</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
export default HeaderTemplate;
