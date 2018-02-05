// import lib to help create a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';

// create a component
// don't need braces and return if return is only thing
/*
const App = () => {
	return (
		<Text>i like soup. soup is good food.</Text>
	);
};
*/

const App = () => (
	<Text>i like soup. soup is good food.</Text>
);


// render it
AppRegistry.registerComponent('albums', () => App);
