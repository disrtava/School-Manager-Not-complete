import React from "react";
import {StyleSheet,Text,View,Image, SafeAreaView} from 'react-native'
import * as AddCalendarEvent from 'react-native-add-calendar-event'
import {ScheduleComponent,Inject,Day,Week,WorkWeek,Agenda,EventSettingsModel} from '@syncfusion/ej2-react-schedule'
import {DataManager , WebApiAdapter} from '@syncfusion/ej2-data'

const eventClicked = (event) =>{
    alert(JSON.stringify(event))
}


export default class TimeTable extends React.Component {

    remoteData = new DataManager({
        url : 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor : new WebApiAdapter,
        crossDomain : true
    })

    render(){
        return(
            <View style = {styles.container}>
                <ImageBackground source = {require('../assets/bgImg.jpg')}>
                <View style = {styles.appTitle}>
                    <Image 
                    source = {require("../assets/logo.png")}
                    style = {styles.appIcon}/>
                    <Text style = {styles.appTitleText}>
                        School Manager
                    </Text>
                </View>
                <ScheduleComponent currentView = 'Day' eventSettings={{dataSource :this.remoteData}}>
                    <Inject services={[Week,Day,WorkWeek,Agenda]}/>
                </ScheduleComponent>
                </ImageBackground>
            </View>
        )
    }
}