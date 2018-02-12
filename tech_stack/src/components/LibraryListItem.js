import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
	render() {
		const {titleStyle} = styles;

		return (
			<CardSection>
				<Text style={titleStyle}>
					{this.props.library.title}
				</Text>
			</CardSection>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = state => {
	return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(LibraryListItem);