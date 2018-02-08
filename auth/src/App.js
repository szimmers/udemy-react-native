import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyCNtfEgJXxKwjG0RJrthb8p6qG4NvrwdNo",
			authDomain: "udemy-react-native-auth-7bf47.firebaseapp.com",
			databaseURL: "https://udemy-react-native-auth-7bf47.firebaseio.com",
			projectId: "udemy-react-native-auth-7bf47",
			storageBucket: "udemy-react-native-auth-7bf47.appspot.com",
			messagingSenderId: "500220053"
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header title="Auth"/>
				<Text>howdy</Text>
			</View>
		);
	}
}

export default App;