import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loader from '../components/Loader';
import SignUpButton from '../components/SignUpButton'


const ForgotPassword = ({navigation}) => {

    // To do: login handlers, forgot password, google auth, refactor using another input component
    const [formData,setformData] = useState({
        email:'',
        password:''
    })
    const [loading, setLoading] = React.useState(false);

    // placeholder login function
    const changePassword = () => {
        console.log("password changed!")
    };

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <Loader visible={loading} />
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View >
                <Image source={require('../assets/Images/forgotPasswordImage.png')} style={{width:320,height:320}}  />    
            </View>
            <View style={{flexDirection:'column',backgroundColor: Colors.white, paddingTop:50, paddingHorizontal:20}} >
                    <Text style={{color: Colors.black, fontSize: 40, fontWeight: 'bold'}}>Forgot your Password?</Text>
                    <Text style={{color: Colors.grey, fontSize: 18, marginVertical: 10}}>Key in your email to reset your password!</Text>

                <View style={{flexDirection:'column',paddingTop:50}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.light_grey,width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />

                    </View>
                    <SignUpButton title={"Change my Password"} onPress={changePassword} />
                </View>
            </View>
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
})