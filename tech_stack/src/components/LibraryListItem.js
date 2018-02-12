import React, {Component} from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
	renderDescription(expanded, description) {
		if (expanded) {
			return (
				<CardSection>
					<Text>
						{description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const {titleStyle} = styles;
		const {id, title, description} = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription(this.props.expanded, description)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = (state.selectedLibraryId === ownProps.library.id);
	return {expanded};
};

export default connect(mapStateToProps, actions)(LibraryListItem);