import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Card, CardSection, LabeledTextInput} from './common';

class EmployeeDetail extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label="Name"
						placeholder="Tim"
					/>
				</CardSection>

				<CardSection>
					<LabeledTextInput
						label="Phone"
						placeholder="555-555-5555"
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeDetail;