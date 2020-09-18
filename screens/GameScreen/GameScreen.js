import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const RNG = Math.floor(Math.random() * (max - min)) + min;

	if ((RNG = exclude)) {
		return generateRandomBetween(min, man, exclude);
	} else {
		return RNG;
	}
};

const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, props.Choice)
	);

	return <View></View>;
};

const styles = StyleSheet.create({});

export default GameScreen;
