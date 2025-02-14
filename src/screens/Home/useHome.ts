import { getRandomColor } from "@/utils/functions";
import { useState } from "react";

export function useHome() {

    const [bgColor, setBgColor] = useState("#FFFFFF");

    const getGreeting = (): string => {
        const hour = new Date().getHours();
      
        if (hour < 12) {
          return "Good morning! ☀️";
        } else if (hour < 18) {
          return "Good afternoon! 🌤️";
        } else {
          return "Good evening! 🌙";
        }
    };

    function touchScreen() {
        setBgColor(getRandomColor())
    };

    return {
        touchScreen,
        getGreeting,
        bgColor
    }
};