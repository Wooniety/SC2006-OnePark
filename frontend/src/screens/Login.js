import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'

const Login = () => {

    const [formData,setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontSize:30,color:Colors.black,paddingTop:20}} >Ready to get parking?</Text>
                </View>

                <View style={{flexDirection:'column',paddingTop:60}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Enter Email" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'100%',marginBottom:10}} >
                        <TouchableOpacity onPress={()=>console.log("Forgot Password")} style={styles.forgot_pw} >  
                            <Text style={{fontSize:15, color:'#818181',alignSelf:'flex-end',paddingTop:10, textAlign:'right'}} >Forgot Password?</Text>
                        </TouchableOpacity>    
                    </View>

                    <Buttons  btn_text={"Sign In"} on_press={()=>console.log(formData)} />
                </View>
            </View>

            {/* social login section */}
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >
                <Text style={{textAlign:'center',marginVertical:35,color:'#818181',fontSize:20}} >Or</Text>
                
                {/* Google Authentication to be changed */}
                <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >  
                        <Image style={styles.social_img} source={require('../assets/Images/google_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16}} >Sign in with Google </Text>
                    </TouchableOpacity>
                </View>

                {/* Navigate to Sign Up page, work in progress */}
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
                    <Text style={{fontSize:17,color:'#818181'}} >Don't have a account? </Text>
                    <TouchableOpacity onPress={()=>console.log("Sign Up")}>  
                            <Text style={{fontSize:17, color:'#333'}} >Sign Up!</Text>
                    </TouchableOpacity>    
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    },
    forgot_pw:{
        borderWidth: 0,
        borderColor: 'transparent',
        marginBottom:20,
        marginTop:20
    }
})