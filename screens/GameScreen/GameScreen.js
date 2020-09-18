import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import Card from '../../components/Card/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	let RNG = Math.floor(Math.random() * (max - min)) + min;

	if (RNG == exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return RNG;
	}
};

const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, props.userChoice)
	);

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title='LOWER' onPress={() => {}} />
				<Button title='GREATER' onPress={() => {}} />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
});

export default GameScreen;
