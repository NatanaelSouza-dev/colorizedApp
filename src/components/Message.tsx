import { getContrastColor } from "@/utils/functions";
import { useEffect, useState } from "react";

import {
	Animated,
	StyleSheet,
	Text,
	View
} from "react-native";

interface IMessage {
	title: string;
	text: string;
	currentBgColor: string;
}

export default function Message({
	title = "",
	text = "",
	currentBgColor = "#FFF"
}: IMessage) {

	const [animatedValues, setAnimatedValues] = useState<Animated.Value[]>([]);

	useEffect(() => {
		const values = text.split('').map(() => new Animated.Value(0));
		setAnimatedValues(values);

		const animations = values.map((value, index) =>
			Animated.timing(value, {
				toValue: 1,
				duration: 200,
				delay: index * 300,
				useNativeDriver: true,
			})
		);

		Animated.stagger(50, animations).start();
	}, [title]);

	const renderLetters = () => {
		return title.split('').map((letter, index) => (
			<Animated.Text
				key={index}
				style={[
					styles.letter,
			 		{
						opacity: animatedValues[index] || new Animated.Value(0),
						transform: [
							{
								scale: (animatedValues[index] || new Animated.Value(0)).interpolate({
									inputRange: [0, 0.5, 1],
									outputRange: [0, 1.5, 1],
								}),
							},
							{
								rotate: (animatedValues[index] || new Animated.Value(0)).interpolate({
									inputRange: [0, 0.5, 1],
									outputRange: ['0deg', '20deg', '0deg'],
								}),
							},
						],
					},
					{
						color: getContrastColor(currentBgColor)
					}
				]}
			>
				{letter}
			</Animated.Text>
		));
	};

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				{renderLetters()}
			</View>
			<Text style={{ ...styles.text, color: getContrastColor(currentBgColor) }}>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	letter: {
		fontSize: 50,
		fontWeight: "bold"
	},
	text: {
		fontSize: 18,
		textAlign: "center"
	}
});