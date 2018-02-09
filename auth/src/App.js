import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	// trinary!
	state = {loggedIn: null};

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

		firebase.auth().onAuthStateChanged((user) => {
			this.setState({loggedIn: !!user})
		});
	}

	onLogout() {
		firebase.auth().signOut();
	}

	renderContent() {
		const {spinnerContainerStyles} = styles;

		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={this.onLogout.bind(this)}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm/>;
			default:
				return (
					<View style={spinnerContainerStyles}>
						<Spinner/>
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header title="Auth"/>
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	spinnerContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default App;