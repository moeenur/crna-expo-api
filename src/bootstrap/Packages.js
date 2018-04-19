import Expo, { Font } from 'expo';
import React from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './../themes/components';
import ubuntuMaterial from './../themes/variables/ubuntu-material';
import Autoload from './Autoload';

class Packages extends React.Component {
    constructor() {
        super();
        this.state = {
            isFontLoaded: false,
        };
    }
    componentDidMount() {
        this.initFonts().then(res => this.setState({
            isFontLoaded: (res) ? false : true
        }));
    }
    async initFonts() {
        await Font.loadAsync({
            'Ubuntu': require('./../assets/fonts/Ubuntu.ttf'),
        });
    }

    render() {
        return (
            this.state.isFontLoaded ? (
                <StyleProvider style={getTheme(ubuntuMaterial)}>
                    <Autoload />
                </StyleProvider>
            ) : (<Expo.AppLoading />)
        );
    }
}
export default Packages;