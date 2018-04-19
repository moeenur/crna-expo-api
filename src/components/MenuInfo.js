import React from 'react';
import { Content, Spinner, Card, CardItem, Left, Right, Body, Icon, Text } from 'native-base';
import Menus from './../services/Menus';

class MenuInfo extends React.Component {
	state = {
		loading: false,
		menu_id: '',
		menu: {}
	};
	menuClass;

	constructor(props) {
		super(props);
		this.state.menu_id = props.navigation.state.params.data;
		this.menuClass = new Menus();
	}


	componentDidMount() {
		this.setState({ loading: true });
		this.getMenuInfo(this.state.menu_id)
			.then(res => this.setState({
				loading: false,
				menu: res.menu_info
			}))
			.catch(err => console.error(err.message));
	}

	getMenuInfo = async (menu_id) => {
		return this.menuClass.menuInfoById(menu_id);
	};


	render() {
		return this.state.loading ? (
			<Content>
				<Spinner color="blue" />
			</Content>
		) : (
				<Content padder>
					<Card>
						<CardItem header>
							<Text>{this.state.menu.name}</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text>{this.state.menu.cname}</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<Text>{this.state.menu.price}</Text>
						</CardItem>
					</Card>
				</Content>
			);
	}
}

export default MenuInfo;