import React, {Component} from 'react';
import {Text, View} from 'react-native';

const AlbumDetail = (props) => {
	//const {textStyle, viewStyle} = styles;

	return (
		<View>
			<Text>{props.album.title}</Text>
		</View>
		/*
		<View style={viewStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
		*/
	);
};

export default AlbumDetail;
