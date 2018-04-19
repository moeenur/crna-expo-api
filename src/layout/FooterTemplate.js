import React from 'react';
import Routes from './../Routes';
import { Footer, FooterTab, Button, Body, Icon, Text } from 'native-base';

class FooterTemplate extends React.Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>© 2018 mOeenuR, All rights reserved.</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }

}
export default FooterTemplate;