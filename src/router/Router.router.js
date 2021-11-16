import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { StatusBar } from "react-native"
import Screen1 from "../screens/Screen1.screen"
import Screen2 from "../screens/Screen2.screen"
import Screen3 from "../screens/Screen3.screen"
import Screen4 from "../screens/Screen4.screen"
import Screen5 from "../screens/Screen5.screen"
import Screen6 from "../screens/Screen6.screen"
import Splash from "../screens/Splash.screen"

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={ true } />
            <Stack.Navigator initialRouteName="Splash" screenOptions={ { headerShown: false } } >
                <Stack.Screen name="Splash" component={ Splash } />
                <Stack.Screen name="Screen1" component={ Screen1 } />
                <Stack.Screen name="Screen2" component={ Screen2 } />
                <Stack.Screen name="Screen3" component={ Screen3 } />
                <Stack.Screen name="Screen4" component={ Screen4 } />
                <Stack.Screen name="Screen5" component={ Screen5 } />
                <Stack.Screen name="Screen6" component={ Screen6 } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router