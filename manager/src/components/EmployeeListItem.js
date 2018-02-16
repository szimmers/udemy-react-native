import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class EmployeeListItem extends Component {
	render() {
		const {name} = this.props.employee;
		const {titleStyles} = styles;

		return (
			<CardSection>
				<Text style={titleStyles}>{name}</Text>
			</CardSection>
		);
	}
}

const styles = {
	titleStyles: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default EmployeeListItem;