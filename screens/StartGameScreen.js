import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';

import Card from '../components/Card/Card';
import Colors from '../constants/colors';
import Input from '../components/Input/Input';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import BodyText from '../components/Text/BodyText';
import TitleText from '../components/Text/TitleText';
import MainButton from '../components/Buttons/MainButton';

const StartGameScreen = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [storedValue, setStoredValue] = useState('');

	const numberInputHandler = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setIsConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid Number!',
				'Number has to be a number between 1 and 99',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			);
			return;
		}
		setIsConfirmed(true);
		setEnteredValue('');
		setStoredValue(chosenNumber);
		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (isConfirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You Selected</Text>
				<NumberContainer>{storedValue}</NumberContainer>
				<MainButton onPress={() => props.onStartGame(storedValue)}>
					START GAME
				</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<TitleText style={styles.title}>Start a New Game!</TitleText>
				<Card style={styles.inputContainer}>
					<BodyText>Select A Number</BodyText>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCorrect={false}
						autoCapitalize='none'
						keyboardType='numeric'
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='reset'
								onPress={resetInputHandler}
								color={Colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='confirm'
								onPress={confirmInputHandler}
								color={Colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		marginVertical: 10,
		fontSize: 20,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGameScreen;
