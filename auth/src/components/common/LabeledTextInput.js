import React from 'react';
import {Text, TextInput, View} from 'react-native';

/*
value={this.state.text}
onChangeText={(text) => this.setState({text})}
*/
const LabeledTextInput = ({label, value, onChangeText}) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={{height: 20, width: 100}}
			/>
		</View>
	);
};

export {LabeledTextInput};