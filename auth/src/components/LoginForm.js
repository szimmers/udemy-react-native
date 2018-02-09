import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, LabeledTextInput, Spinner} from './common';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		busy: false
	};

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			busy: false
		});
	}

	onLoginFail() {
		this.setState({error: 'Authentication failed', busy: false});
	}

	onLoginAttempt() {
		const {email, password} = this.state;

		this.setState({error: '', busy: true});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch((e) => {
				console.log(e);

				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	renderButton() {
		if (this.state.busy) {
			return <Spinner size="small"/>
		}

		return (
			<Button onPress={this.onLoginAttempt.bind(this)}>
				Log In
			</Button>
		)
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

				<Text style={errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
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