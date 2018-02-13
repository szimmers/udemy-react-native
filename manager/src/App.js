import React, {Component} from 'react';
import firebase from 'firebase';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBw1JmoBjKlKB8TG6NZzJ2nEArWjOFHlhk',
			authDomain: 'udemy-react-native-manag-fbae6.firebaseapp.com',
			databaseURL: 'https://udemy-react-native-manag-fbae6.firebaseio.com',
			projectId: 'udemy-react-native-manag-fbae6',
			storageBucket: 'udemy-react-native-manag-fbae6.appspot.com',
			messagingSenderId: '1043233603029'
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;
