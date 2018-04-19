import React from 'react';
import { Content, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {

	render() {
		return (
			<Content>
				<Text>Home Screen</Text>
				<Button onPress={() => Actions.list_menus()} full>
					<Text>List of Menus</Text>
					<Icon name='arrow-forward' right />
				</Button>
			</Content>
		);
	}
}

export default Home;