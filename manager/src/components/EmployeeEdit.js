import React, {Component} from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {employeeSave, employeeUpdate} from '../actions';
import {Button, Card, CardSection} from './common';
import EmployeeForm from './EmployeeForm';

/**
 * allows employee to be edited, plus other actions
 */
class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		});
	}

	onSave() {
		const {name, phone, shift} = this.props;
		const {uid} = this.props.employee;
		this.props.employeeSave({name, phone, shift, uid});
	}

	onTextSchedule() {
		const {phone, shift} = this.props;
		const msg = `You are working on ${shift} this week.`;
		Communications.text(phone, msg);
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />

				<CardSection>
					<Button onPress={this.onSave.bind(this)}>
						Save
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextSchedule.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm;

	return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);