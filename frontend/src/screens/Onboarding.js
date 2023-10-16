import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native'
import {Colors} from '../constants'
import OnboardingButton from '../components/OnboardingButton'


const Onboarding = ({navigation}) => {

    return (
        <View style={{flex:1,backgroundColor:Colors.white}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {}
            <View style={{flex:1,flexDirection:"column",backgroundColor:'#ddd'}} >
                <ImageBackground source={require('../assets/Images/onboarding_logo.png')}
                style={{flex:1,width:'100%', backgroundColor:'#fff'}}  />
            </View>

            {/* button and text */}
            <View style={{flex:2,backgroundColor:'#fff'}} >
                {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff', paddingTop:50}} >
                    <Text style={{color:Colors.black,fontSize:30}} >OnePark</Text>
                    <Text style={{color:"#999",fontSize:14, textAlign:'center',paddingTop:10}} >An all in one parking app for your needs!</Text>
                </View>   

                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}} >
                    {}
                    <OnboardingButton btn_text={"Get Parking!"} on_press={()=>navigation.navigate("Login")} />
                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})