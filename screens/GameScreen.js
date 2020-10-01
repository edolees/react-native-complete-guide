import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card';
import MainButton from '../components/Buttons/MainButton';

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
	const [rounds, setRounds] = useState(0);
	const currentMin = useRef(1);
	const currentMax = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (currentGuess == userChoice) {
			onGameOver(rounds);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = direction => {
		if (
			(direction === 'LOWER' && currentGuess < props.userChoice) ||
			(direction === 'GREATER' && currentGuess > props.userChoice)
		) {
			Alert.alert('HEY!!!!!!', "You're Cheating Cmon", [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'LOWER') {
			currentMax.current = currentGuess;
		} else {
			currentMin.current = currentGuess;
		}

		const nextNumber = generateRandomBetween(
			currentMin.current,
			currentMax.current,
			currentGuess
		);

		setCurrentGuess(nextNumber);
		setRounds(currentRounds => currentRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={() => nextGuessHandler('LOWER')}>LOWER</MainButton>
				<MainButton onPress={() => nextGuessHandler('GREATER')}>
					GREATER
				</MainButton>
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
		width: 400,
		maxWidth: '90%',
	},
});

export default GameScreen;
