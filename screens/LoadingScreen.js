import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LoadingScreen extends Component {
    componentDidMount(){
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.props.navigation.navigate("GetStarted")
            }
            else {
                this.props.navigation.navigate("LoginScreen")
            }
        })
    }

    render(){
        return(
            <View style = {StyleSheet.container}>
                <ImageBackground source = {require('../assets/bgImg.jpg')}>
                <View style = {styles.appTitle}>
                    <Image 
                    source = {require("../assets/logo.png")}
                    style = {styles.appIcon}/>
                    <Text style = {styles.appTitleText}>
                        School Manager
                    </Text>
                </View>
                <Text>Loading</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });