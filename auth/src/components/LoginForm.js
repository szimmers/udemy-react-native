import React, {Component} from 'react';
import {Button, Card, CardSection, LabeledTextInput} from './common';

class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	};

	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label='e-mail:'
						placeholder='bob@happytown.com'
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

				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;