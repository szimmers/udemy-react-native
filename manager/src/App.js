import React, {Component} from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
