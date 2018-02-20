import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeCreate, employeeUpdate} from '../actions';
import {Button, Card, CardSection} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount() {
		// default to monday so we get a value if user doesn't touch picker
		this.props.employeeUpdate({prop: 'shift', value: 'M'});
	}

	onSave() {
		const {name, phone, shift} = this.props;
		this.props.employeeCreate({name, phone, shift});
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
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm;

	return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeEdit);