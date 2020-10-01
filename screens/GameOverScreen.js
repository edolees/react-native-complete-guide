import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from '../components/Text/TitleText';
import BodyText from '../components/Text/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/Buttons/MainButton';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<TitleText>Game is Over</TitleText>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/success.png')} />
			</View>
			<View style={styles.resultContainer}>
				<BodyText style={styles.resultText}>
					Your Phone needed{' '}
					<Text style={styles.highlights}>{props.roundsNumber} </Text>
					rounds to guess the number{' '}
					<Text style={styles.highlights}>{props.userNumber}</Text>
				</BodyText>
			</View>
			<MainButton onPress={props.newGame}>NEW GAME</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		borderRadius: 200,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		marginHorizontal: 30,
		marginVertical: 15,
	},
	resultText: {
		textAlign: 'center',
		fontSize: 20,
	},
	highlights: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;
