import React from "react";
import {
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Left,
  Body,
  Button,
  Spinner
} from "native-base";
import { Actions } from "react-native-router-flux";
import Menus from "./../services/Menus";

class ListMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      menus: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getListMenus()
      .then(res =>
        this.setState({
          loading: false,
          menus: res.menus
        })
      )
      .catch(err => console.error(err.message));
  }

  getListMenus = async () => {
    const menu = new Menus();
    return menu.allMenus();
  };

  render() {
    return this.state.loading ? (
      <Content>
        <Spinner color="blue" />
      </Content>
    ) : (
        <Content>
          <List
            dataArray={this.state.menus}
            renderRow={item => (
              <ListItem onPress={() => {
                Actions.menu_info(item.id);
              }} avatar>
                <Left>
                  <Icon active name="logo-googleplus" />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.price}</Text>
                </Body>
                <Right>
                  <Text>
                    <Icon name="arrow-forward" />
                  </Text>
                </Right>
              </ListItem>
            )}
          />
        </Content>
      );
  }
}
export default ListMenus;
