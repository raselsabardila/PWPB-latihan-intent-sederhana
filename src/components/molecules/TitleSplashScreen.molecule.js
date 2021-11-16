import React from "react";
import { View, Text } from "react-native"
import Tailwind from "../../libs/Tailwind.lib";

const TitleSplashScreen = ({ title, description }) => {
    return (
        <View>
            <View style={ Tailwind.style(`flex flex-col p-6`) } >
                <Text style={ Tailwind.style(`font-poppins-semibold text-white text-lg`) } >
                    { title }
                </Text>
                <Text style={ Tailwind.style(`font-poppins-regular text-xs text-white leading-6 tracking-wide mt-2 opacity-50`) } >
                    { description }
                </Text>
            </View>
        </View>
    )
}

export default TitleSplashScreen