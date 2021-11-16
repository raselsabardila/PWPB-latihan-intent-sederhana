import React from "react";
import TemplateTitleScreen from "../components/molecules/TemplateTitleScreen.molecule"

const Screen1 = ({ navigation }) => {
    return (
        <TemplateTitleScreen title={ "Screen 1" } description={ "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, consequatur velit blanditiis quos voluptatibus quas placeat earum dolorum ipsam molestias?" } navigation={ navigation } />
    )
}

export default Screen1