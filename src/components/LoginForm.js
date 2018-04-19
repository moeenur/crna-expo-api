import React from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Label, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

const validate = values => {
    const error = {};
    error.email = '';
    error.password = '';
    var ema = values.email;
    var nm = values.password;
    if (values.email === undefined) {
        ema = '';
    }
    if (values.password === undefined) {
        nm = '';
    }
    if (ema.length < 8 && ema !== '') {
        error.email = 'too short';
    }
    if (!ema.includes('@') && ema !== '') {
        error.email = '@ not included';
    }
    if (nm.length < 6) {
        error.password = 'min 6 characters';
    }
    return error;
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
        this.renderInput = this.renderInput.bind(this);
    }
    handleSubmit(values) {
        console.log(values);
        sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        return sleep(1000) // simulate server latency
            .then(() => {
                if (!['john@x.x', 'paul@x.x'].includes(values.email)) {
                    throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
                } else if (values.password !== 'redux-form') {
                    throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
                } else {
                    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                }
            })
    };
    async componentDidMount() {
        this.setState({ isReady: true });
    }
    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError} floatingLabel>
                <Label>{label}</Label>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }
    render() {
        const { handleSubmit, reset } = this.props;
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Content padder>
                    <Field name="email" type="email" label="Email" component={this.renderInput} />
                    <Field name="password" type="password" label="Password" component={this.renderInput} />
                    <Button block primary onPress={this.handleSubmit}
                        style={{ marginTop: 10 }}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
const signForm = reduxForm({
    form: 'LoginForm',
    validate
})(LoginForm);
export default connect()(signForm);