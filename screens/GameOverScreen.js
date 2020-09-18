import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from '../components/Text/TitleText';
import BodyText from '../components/Text/BodyText';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<TitleText>Game is Over</TitleText>
			<Image source={require('../assets/success.png')} />
			<BodyText>Number of Ronds : {props.roundsNumber}</BodyText>
			<BodyText>Number to guess was : {props.userNumber}</BodyText>
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
