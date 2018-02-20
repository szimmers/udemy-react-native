import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Picker, Text} from 'react-native';
import {employeeUpdate} from '../actions';
import {CardSection, LabeledTextInput} from './common';

/**
 * common form part for creating or updating an employee
 */
class EmployeeForm extends Component {
	render() {
		return (
			<View>
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

				<CardSection style={styles.pickerCardStyles}>
					<Text style={styles.pickerLabelStyles}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={(day) => this.props.employeeUpdate({prop: 'shift', value: day})}
					>
						<Picker.Item label="Monday" value="M" />
						<Picker.Item label="Tuesday" value="T" />
						<Picker.Item label="Wednesday" value="W" />
						<Picker.Item label="Thursday" value="Th" />
						<Picker.Item label="Friday" value="F" />
						<Picker.Item label="Saturday" value="Sa" />
						<Picker.Item label="Sunday" value="Su" />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerLabelStyles: {
		fontSize: 18,
		paddingLeft: 20
	},
	pickerCardStyles: {
		flexDirection: 'column'
	}
};

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm;

	return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
