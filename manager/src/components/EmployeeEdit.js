import React, {Component} from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {employeeSave, employeeUpdate, employeeDelete} from '../actions';
import {ConfirmModal, Button, Card, CardSection} from './common';
import EmployeeForm from './EmployeeForm';

/**
 * allows employee to be edited, plus other actions
 */
class EmployeeEdit extends Component {
	state = {showModal: false};

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

	deleteEmployee() {
		const {uid} = this.props.employee;
		this.setState({showModal: false});
		this.props.employeeDelete({uid});
	}

	dontDeleteEmployee() {
		this.setState({showModal: false});
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

				<CardSection>
					<Button onPress={() => this.setState({showModal: !this.state.showModal})}>
						Fire Employee
					</Button>
				</CardSection>

				<ConfirmModal
					visible={this.state.showModal}
					onAccept={this.deleteEmployee.bind(this)}
					onReject={this.dontDeleteEmployee.bind(this)}
				>
					Are you sure you want to fire this employee?
					They will be permanently deleted.
				</ConfirmModal>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm;

	return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);