import React from "react";
import { Text, View } from "react-native";
import Tailwind from "../../libs/Tailwind.lib";
import Indicator from "../atoms/indicator.atom";

const SwipeIndicator = ({ swipe, data }) => {
    return (
        <View style={ Tailwind.style(`flex flex-row items-center`) } >
            {
                (
                    data.map((item, index) => {
                        return (
                            <Indicator key={ index } isActive={ index == swipe ? true : false } />
                        )
                    })
                )
            }
        </View>
    )
}

export default SwipeIndicator