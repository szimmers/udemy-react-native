import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';

class EmployeeListItem extends Component {
	onRowPress() {
		Actions.employeeCreate({employee: this.props.employee});
	}

	render() {
		const {name} = this.props.employee;
		const {titleStyles} = styles;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={titleStyles}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
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