import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
	const {textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Albums</Text>
		</View>
	);
};

// justifyContent: align vertically
// alignItems: align horizontally
const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.4,
		elevation: 2,
		position: 'relative'
	}
};

export default Header;
