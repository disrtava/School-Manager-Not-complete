import React from "react";
import { StyleSheet , View , Text , Image } from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"

const Tab = createMaterialBottomTabNavigator()

export default class BottomTabNavigator extends React.Component {

    renderTimeTable = props => {
        return <TimeTable/>
    }

    render(){
        return(
            <Tab.Navigator 
              labeled = {false}
              barStyle = {styles.bottomTabStyle}
              screenOptions ={({route}) => ({
                  tabBarIcon: ({focused , color}) => {
                      let iconName;
                      if (route.name === "GetStarted") {
                          iconName = focused ? "home" : "home-outline"
                      }
                  }
              }
              )}
              activeColor = {""}
              inactiveColor = {""}
            >
            <Tab.Screen
              name = "TimeTable"
              component = {this.renderTimeTable}
              options = {{ unmountOnBlur : true}}
            />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });