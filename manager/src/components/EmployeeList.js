import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {employeesFetch} from '../actions/EmployeeActions'

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	render() {
		return (
			<View>
				<Text>tim</Text>
				<Text>bob</Text>
				<Text>larry</Text>
				<Text>doug</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	//const {} = state.employees;

	return {
		employees: state.employees;
	}
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);