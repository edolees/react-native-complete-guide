import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from '../components/Text/TitleText';
import BodyText from '../components/Text/BodyText';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<TitleText>Game is Over</TitleText>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/success.png')} />
			</View>
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
});

export default GameOverScreen;
