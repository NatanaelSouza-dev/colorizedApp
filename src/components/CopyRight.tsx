import { 
    Linking, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity 
} from "react-native";

import { getContrastColor } from "@/utils/functions";

interface IProps {
    currentBgColor: string;
}

const linkedinUrl = "https://www.linkedin.com/in/natanael-souza-dev/";

export function CopyRight({
    currentBgColor
}: IProps ) {
    return (
        <View style={styles.container}>
            <Text style={{ color: getContrastColor(currentBgColor) }}>
                Created by
            </Text>

            <TouchableOpacity onPress={() => Linking.openURL(linkedinUrl)}>
                <Text style={{...styles.link, color: getContrastColor(currentBgColor)}}>
                    @Njs
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        position: "absolute", 
        bottom: 60, 
        gap: 4
    },
    link: {
        fontWeight: "bold"
    }
});