import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity, Alert } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loader from '../components/Loader';
import SignUpButton from '../components/SignUpButton'
import { useIsFocused } from '@react-navigation/native';

const Login = ({navigation}) => {

    // To do: login handlers, forgot password, google auth, refactor using another input component
    const isFocused = useIsFocused();

    const [formData,setformData] = useState({
        email:'',
        password:''
    })
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (isFocused) {
        // The screen is focused
        // Reset the fields here if needed when the screen comes into focus
        setformData({
            email: '',
            password: '',
        });
      }
    }, [isFocused]);

    const login = () => {
        console.log(JSON.stringify(formData))
        fetch('http://thebigsad.southeastasia.cloudapp.azure.com:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => {
          if (response.status === 401) {
            // Directly show an alert for 401 Unauthorized errors
            console.log("here1") //for debugging
            Alert.alert('Login Failed', 'Incorrect email or password!');
            return null; // Return null to signal that we shouldn't attempt to parse the response further
          }
          if (!response.ok) {
            // If the response is not 2xx, throw an error with the status code
            console.log("here2") // for debugging
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // If response is OK, parse the JSON body
        })
        .then(data => {
          if (!data) return; // Handle the case where we early exited due to an error
      
          if (data.success) {
            navigation.navigate("Menu");
          } else {
            Alert.alert('Login Failed', 'Incorrect email or password!');
          }
        })
        .catch(error => {
          // Generic error handling for any other errors
          Alert.alert('Login Error', 'An unexpected error occurred. Please try again later.');
          console.error('Error:', error);
        });
      };
    

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <Loader visible={loading} />
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flexDirection:'column',backgroundColor: Colors.white, paddingTop:50, paddingHorizontal:20}} >
                    <Text style={{color: Colors.black, fontSize: 40, fontWeight: 'bold'}}>Login</Text>
                    <Text style={{color: Colors.grey, fontSize: 18, marginVertical: 10}}>Enter Your Details to Login</Text>

                <View style={{flexDirection:'column',paddingTop:50}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.light_grey,width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} value = {formData.email} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />
                        
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.light_grey,width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} value = {formData.password} style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'100%',marginBottom:10}} >
                        <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")} style={styles.forgot_pw} >  
                            <Text style={{fontSize:15, color:Colors.darker_grey,alignSelf:'flex-end',paddingTop:10, textAlign:'right'}} >Forgot Password?</Text>
                        </TouchableOpacity>    
                    </View>

                    <SignUpButton title={"Get Parking!"} onPress={login} />

                </View>
            </View>

            {/* social login section */}
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >
                <Text style={{textAlign:'center',marginVertical:35,color:'#818181',fontSize:20}} >Or</Text>
                
                {/* To do: Google Authentication */}
                <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >  
                        <Image style={styles.social_img} source={require('../assets/Images/google_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16}} >Sign in with Google </Text>
                    </TouchableOpacity>
                </View>

                {/* Navigate to Sign Up page*/}
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
                    <Text style={{fontSize:17,color:Colors.darker_grey}} >Don't have a account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>  
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