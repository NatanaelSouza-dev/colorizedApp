import { styles } from "./styles";

import { Text, TouchableOpacity, View } from "react-native";
import Message from "@/components/Message";

import { useHome } from "./useHome";
import { getContrastColor } from "@/utils/functions";
import { CopyRight } from "@/components/CopyRight";

export default function Home() {

    const {
        touchScreen,
        getGreeting,
        bgColor
    } = useHome();

    return (
        <TouchableOpacity 
            style={{ ...styles.touchArea, backgroundColor: bgColor }}
            onPress={touchScreen}
        >
            <Message 
                title="Hello there!" 
                text={getGreeting()} 
                currentBgColor={bgColor} 
            />

            <CopyRight currentBgColor={bgColor} />
        </TouchableOpacity>
    )
}