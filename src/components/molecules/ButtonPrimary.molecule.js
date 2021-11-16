import React from "react";
import { View, Text } from "react-native";
import Tailwind from "../../libs/Tailwind.lib";

const ButtonPrimary = ({ title }) => {
    return (
        <View style={ Tailwind.style(`px-6 py-4 rounded-md bg-gray-900`) } >
            <Text style={ Tailwind.style(`font-poppins-medium text-sm text-white`) } >
                { title }
            </Text>
        </View>
    )
}

export default ButtonPrimary