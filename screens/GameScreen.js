import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess]);
	const currentMin = useRef(1);
	const currentMax = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (currentGuess == userChoice) {
			onGameOver(pastGuesses.length);
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
			currentMin.current = currentGuess + 1;
		}

		const nextNumber = generateRandomBetween(
			currentMin.current,
			currentMax.current,
			currentGuess
		);

		setCurrentGuess(nextNumber);
		// setRounds(currentRounds => currentRounds + 1);
		setPastGuesses(currentPastGuess => [nextNumber, ...currentPastGuess]);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={() => nextGuessHandler('LOWER')}>
					<Ionicons name='md-remove' size={24} color='white' />
				</MainButton>
				<MainButton onPress={() => nextGuessHandler('GREATER')}>
					<Ionicons name='md-add' size={24} color='white' />
				</MainButton>
			</Card>
			<ScrollView>
				{pastGuesses.map(guess => (
					<View key={guess}>
						<Text>{guess}</Text>
					</View>
				))}
			</ScrollView>
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
