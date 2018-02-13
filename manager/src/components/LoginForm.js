import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardSection, LabeledTextInput} from './common';
import {emailChanged} from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label='e-mail'
						placeholder='username@domain.tld'
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<LabeledTextInput
						secureTextEntry
						label='Password'
					/>
				</CardSection>

				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default connect(null, {emailChanged})(LoginForm);