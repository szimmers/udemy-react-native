import React, {Component} from 'react';
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

				<CardSection>
					<Button onPress={this.onLogin.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const {email, password} = state.auth;

	return {
		email,
		password
	}
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);