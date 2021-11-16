import React from "react";
import { View } from "react-native";
import Tailwind from "../../libs/Tailwind.lib";

const Indicator = ({ isActive }) => {
    const style = {
        active: "w-6 h-2 bg-green-400 rounded-full",
        nonActive: "w-2 h-2 bg-white rounded-full opacity-20"
    }

    return (
        <View
            style={ Tailwind.style(`${isActive ? style.active : style.nonActive} ml-1`) }
        />
    )
}

export default Indicator