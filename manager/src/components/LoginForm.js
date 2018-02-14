import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, LabeledTextInput} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLogin() {
		const {email, password} = this.props;
		this.props.loginUser({email, password});
	}

	renderError() {
		if (this.props.error) {
			const {errorTextStyles} = styles;

			return (
				<View style={{backgroundColor: 'white'}}>
					<Text style={errorTextStyles}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label='e-mail'
						placeholder='username@domain.tld'
						value={this.props.email}
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<LabeledTextInput
						secureTextEntry
						label='Password'
						value={this.props.password}
						onChangeText={this.onPasswordChange.bind(this)}
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					<Button onPress={this.onLogin.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyles: {
		color: 'red'
	}
};

const mapStateToProps = (state) => {
	const {email, password, error, user} = state.auth;

	return {
		email,
		password,
		error,
		user
	}
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);