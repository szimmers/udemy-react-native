import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';

class AlbumList extends Component {
	state = {albums: []};

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseData) => this.setState({albums: responseData}));
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			<Text key={album.title}>{album.title}</Text>
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
