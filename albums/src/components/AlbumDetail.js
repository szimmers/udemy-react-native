import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';

const AlbumDetail = (props) => {
	//const {textStyle, viewStyle} = styles;

	return (
		<Text>{props.album.title}</Text>
		/*
		<View style={viewStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
		*/
	);
};

export default AlbumDetail;
