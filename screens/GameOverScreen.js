import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>Game is Over</Text>
			<Text>Number of Ronds : {props.roundsNumber}</Text>
			<Text>Number to guess was : {props.userNumber}</Text>
			<Button title='NEW GAME' onPress={props.newGame} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default GameOverScreen;
