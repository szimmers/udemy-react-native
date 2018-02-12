import React, {Component} from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
	renderDescription(expanded, description) {
		if (expanded) {
			const {descriptionStyles} = styles;

			return (
				<CardSection>
					<Text style={descriptionStyles}>
						{description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const {titleStyles} = styles;
		const {id, title, description} = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyles}>
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
	titleStyles: {
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyles: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = (state.selectedLibraryId === ownProps.library.id);
	return {expanded};
};

export default connect(mapStateToProps, actions)(LibraryListItem);