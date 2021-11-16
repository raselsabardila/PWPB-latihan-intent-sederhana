import React from "react";
import { View, Text, TouchableHighlight } from "react-native"
import Tailwind from "../../libs/Tailwind.lib"
import ButtonPrimary from "./ButtonPrimary.molecule";

const TemplateTitleScreen = ({ title, description, navigation }) => {
    return (
        <View style={ Tailwind.style(`w-full min-h-full px-6 items-center bg-white flex flex-col justify-center`) } >
            <Text style={ Tailwind.style(`font-poppins-semibold text-xl text-gray-900`) } >
                { title }
            </Text>
            <Text style={ Tailwind.style(`font-poppins-regular leading-6 tracking-wide text-xs mt-2 text-center text-gray-400`) } >
                { description }
            </Text>
            <TouchableHighlight style={ Tailwind.style(`mt-10 rounded-md`) } onPress={ () => navigation.goBack() } >
                <ButtonPrimary title={ "Get Back" } />
            </TouchableHighlight>
        </View>
    )
}

export default TemplateTitleScreen