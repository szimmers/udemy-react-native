import React, {Component} from 'react';
import {Text} from 'react-native';

class LibraryListItem extends Component {
	render() {
		return <Text>{this.props.library.title}</Text>
	}
}

export default LibraryListItem;