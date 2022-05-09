import React from 'react'
import { TouchableOpacity, StyleSheet,Text,View, ImageBackground} from 'react-native'

export default class GetStarted extends React.Component {
    render(){
        return(
            <View>
                <ImageBackground source = {require('../assets/bgImg.jpg')}>
                <View style = {styles.appTitle}>
                    <Image 
                    source = {require("../assets/logo.png")}
                    style = {styles.appIcon}/>
                    <Text style = {styles.appTitleText}>
                        School Manager
                    </Text>
                </View>
                <TouchableOpacity style = {styles.timeTableButton} onPress = {()=> this.props.navigation.navigate('TimeTable')}>
                    <Text>TimeTable</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}