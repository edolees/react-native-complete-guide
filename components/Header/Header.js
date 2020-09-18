import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';
import TitleText from '../Text/TitleText';
const Header = props => {
	return (
		<View style={styles.header}>
			<TitleText style={styles.title}>{props.title}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'black',
	},
});

export default Header;
