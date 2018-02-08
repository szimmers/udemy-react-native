import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import {Button, Card, CardSection, LabeledTextInput} from './common';

class LoginForm extends Component {
	state = {email: ''};

	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label='e-mail'
						value={this.state.email}
						onChangeText={(email) => this.setState({email})}
					/>
				</CardSection>

				<CardSection>
					<Text>Password</Text>
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