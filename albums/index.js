// import lib to help create a component
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
	return (
		<View style={{flex: 1}}>
			<Header title={'Albums'}/>
			<AlbumList/>
		</View>
	);
};

// render it
AppRegistry.registerComponent('albums', () => App);
