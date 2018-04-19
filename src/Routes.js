import React from 'react';
import { Platform, View } from 'react-native';
import { Root, Icon } from 'native-base';
import { Router, Drawer, Reducer, Stack, Scene, Actions } from 'react-native-router-flux';
import SideBar from './layout/SideBar';
import Home from './components/Home';
import ListMenus from './components/ListMenus';
import MenuInfo from './components/MenuInfo';

import Application from './Application';
import allReducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { TextInput, TouchableOpacity } from 'react-native';
const store = createStore(allReducers);

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    reducerCreate = params => {
        const defaultReducer = new Reducer(params);
        return (state, action) => {
            console.log('ACTION:', action);
            return defaultReducer(state, action);
        };
    };

    getSceneStyle = () => ({
        backgroundColor: '#FFFFFF',
        shadowOpacity: 1,
        shadowRadius: 3,
    });

    getDrawerIcon() {
        return (<Icon name="menu" />);
    }

    // on Android, the URI prefix typically contains a host in addition to scheme
    prefix = Platform.OS === 'android' ? 'crnaexpapi://crnaexpapi/' : 'crnaexpapi://';

    decleareNavigation() {
        return (
            <Router createReducer={this.reducerCreate} getSceneStyle={this.getSceneStyle} uriPrefix={this.prefix}>
                <Drawer key="drawer" hideNavBar={false} contentComponent={SideBar}
                    drawerIcon={this.getDrawerIcon}>
                    <Scene key="home" component={Home} title="CRNA Expo API" />
                    <Stack key="root" panHandlers={null}>
                        <Scene key="list_menus" component={ListMenus} initial={true} title="List Menus" />
                        <Scene key="menu_info" component={MenuInfo} title="Menu Info"
                            back={true} backTitle="Back" />
                    </Stack>
                    <Scene key="login" component={Application} title="Login" />
                </Drawer>
            </Router>
        );
    }
    render() {
        return (
            <Root>
                {this.decleareNavigation()}
            </Root>
        );
        Actions.refresh({ key: 'drawer', open: value => !value });
    }
}

export default Routes;