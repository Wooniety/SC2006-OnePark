import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity, Keyboard, Pressable } from 'react-native'
import {Colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loader from '../components/Loader';
import SignUpButton from '../components/SignUpButton'

const ForgotPassword = ({navigation}) => {

    // To do: login handlers, forgot password, google auth, refactor using another input component
    const [formData,setformData] = useState({
        email:'',
    })
    const [loading, setLoading] = React.useState(false);

    const [showOTP, setOTPView] = useState(false);
    const toggleOTP = () => {
        setOTPView(!showOTP)
        // Add in sending OTP to email function here
        console.log(formData.email)
    }

    const [otpCode,setotpCode] = useState({
        otp:'',
    })

    const verifyOTP = () => {
        otp = Number(otpCode.otp)
        console.log(typeof(otp)) //Converted to number data type just in case
        console.log(otp)
        // Add in verification of OTP here
    };

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <Loader visible={loading} />
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View >
                <Image source={require('../assets/Images/forgotPasswordImage.png')} style={{width:320,height:320}}  />    
            </View>
            {/* Change this part for toggling */}
            {showOTP ? (
                <View style={{flexDirection:'column',backgroundColor: Colors.white, paddingTop:50, paddingHorizontal:20}} >
                    <Text style={{color: Colors.black, fontSize: 40, fontWeight: 'bold'}}>Forgot your Password?</Text>
                    <Text style={{color: Colors.grey, fontSize: 18, marginVertical: 10}}>Key in the OTP sent to your email account!</Text>

                    <View style={{flexDirection:'column',paddingTop:50}} >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.light_grey,width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                            <TextInput onChangeText={(text)=>{setotpCode((prevState)=>({...prevState,otp:text}))}} style={styles.input} placeholder="OTP" placeholderTextColor="#818181" />
                        </View>
                        <SignUpButton title={"Verify OTP"} onPress={verifyOTP} />
                    </View>
                </View>
            ):(
                <View style={{flexDirection:'column',backgroundColor: Colors.white, paddingTop:50, paddingHorizontal:20}} >
                    <Text style={{color: Colors.black, fontSize: 40, fontWeight: 'bold'}}>Forgot your Password?</Text>
                    <Text style={{color: Colors.grey, fontSize: 18, marginVertical: 10}}>Key in your email to reset your password!</Text>

                    <View style={{flexDirection:'column',paddingTop:50}} >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.light_grey,width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                            <Icon name="envelope-o" size={22} color="#818181" />
                            <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />
                        </View>
                    <SignUpButton title={"Change my Password"} onPress={toggleOTP} />
                    </View>
                </View>)}

        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        paddingLeft:20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})