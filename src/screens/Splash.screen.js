import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GestureRecognizer from "react-native-swipe-detect";
import SwipeIndicator from "../components/organism/SwipeIndicator.orgnism";
import Tailwind from "../libs/Tailwind.lib"
import TitleSplashScreen from "../components/molecules/TitleSplashScreen.molecule"

const Splash = ({ navigation }) => {
    const [indicatorIndex, setIndicatorIndex] = useState(0)
    const data = [
        {
            title: "Screen 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1598516801967-0ce306d00780?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen1"
        },
        {
            title: "Screen 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1535240073203-05bc5d7f1113?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen2"
        },
        {
            title: "Screen 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen3"
        },
        {
            title: "Screen 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dnJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen4"
        },
        {
            title: "Screen 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen5"
        },
        {
            title: "Screen 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla animi veritatis.",
            thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            link: "Screen6"
        }
    ]

    return (
        <SafeAreaView>
            <GestureRecognizer
                onSwipeLeft={ () => {
                    if(indicatorIndex >= 5) return

                    setIndicatorIndex(indicatorIndex + 1)
                } }
                onSwipeRight={ () => {
                    if(indicatorIndex <= 0) return


                    setIndicatorIndex(indicatorIndex - 1)
                } }
            >
                <View style={ Tailwind.style(`min-h-full w-full`) } >
                    <ImageBackground
                        source={ { uri: data[indicatorIndex].thumbnail } }
                        style={ Tailwind.style(`w-full min-h-full`) }
                    >
                        <LinearGradient style={ Tailwind.style(`w-full min-h-full flex flex-col justify-end`) } colors={["#10101010", "#101010"]} >
                            <TitleSplashScreen title={ data[indicatorIndex].title } description={ data[indicatorIndex].description } />
                            <View style={ Tailwind.style(`flex flex-row justify-between items-center w-full p-6`) } >
                                <SwipeIndicator swipe={ indicatorIndex } navigation={ navigation } data={ data } />
                                <TouchableHighlight underlayColor={ "#FFFFFF10" } style={ Tailwind.style(`rounded-full`) } onPress={ () => navigation.navigate(data[indicatorIndex].link) } >
                                    <Text style={ Tailwind.style(`text-xs font-poppins-regular text-white`) } >
                                        Visit Screen
                                    </Text>
                                </TouchableHighlight>
                            </View>   
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </GestureRecognizer>
        </SafeAreaView>
    )
}

export default Splash