import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Button, Card, CardSection, LabeledTextInput} from './common';

class EmployeeDetail extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<LabeledTextInput
						label="Name"
						placeholder="Tim"
						value={this.props.name}
						onChangeText={(text) => this.props.employeeUpdate({prop: 'name', value: text})}
					/>
				</CardSection>

				<CardSection>
					<LabeledTextInput
						label="Phone"
						placeholder="555-555-5555"
						value={this.props.phone}
						onChangeText={(text) => this.props.employeeUpdate({prop: 'phone', value: text})}
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

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm;

	return {
		name,
		phone,
		shift
	}
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeDetail);