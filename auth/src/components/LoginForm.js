import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, LabeledTextInput} from './common';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: ''
	};

	onLoginAttempt() {
		const {email, password} = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
				this.setState({error: 'Authentication failed'});
			});
		});
	}

	render() {
		const {errorTextStyle} = styles;

		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label='e-mail:'
						placeholder='user@domain.tld'
						value={this.state.email}
						onChangeText={(email) => this.setState({email})}
					/>
				</CardSection>

				<CardSection>
					<LabeledTextInput
						label='Password:'
						secureTextEntry
						value={this.state.password}
						onChangeText={(password) => this.setState({password})}
					/>
				</CardSection>

				<Text styles={errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onLoginAttempt.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;