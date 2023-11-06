import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
	RegExpMatcher,
	englishDataset,
	englishRecommendedTransformers,
} from 'obscenity';
import {Colors} from '../constants'
import Input from '../components/Input';
import SignUpButton from '../components/SignUpButton'
import Loader from '../components/Loader';

const SignUp = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    password: '',
    phonenum: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const containsOnlyNumbers = (input) => {
    return /^[0-9]+$/.test(input);
  };

  const containsSpecialCharacter = (input) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(input);
  }

  const profanity_Matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email!', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Invalid email!', 'email');
      isValid = false;
    }

    if (!inputs.name) {
      handleError('Please input full name!', 'name');
      isValid = false;
    } else if (profanity_Matcher.hasMatch(inputs.name)) {
      handleError('Please mind your language!', 'name');
      isValid = false;
    }

    if (!inputs.phonenum) {
      handleError('Please input 1 number!', 'phonenum');
      isValid = false;
    } else if (!containsOnlyNumbers(inputs.phonenum)) {
      handleError('Invalid phone number!', 'phonenum');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password!', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Minimum password length of 5!', 'password');
      isValid = false;
    } else if (inputs.password.length > 30) {
      handleError('Maximum password length of 30!', 'password');
      isValid = false;
    } else if (!containsSpecialCharacter(inputs.password)) {
      handleError('Please include at least 1 special character!', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    console.log(JSON.stringify(inputs))
    fetch('http://thebigsad.southeastasia.cloudapp.azure.com:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
      })
      .then(response => {
        if (response.status === 500) {
          // Directly show an alert for 401 Unauthorized errors
          console.log("here1") //for debugging
          Alert.alert('Error', 'Email is already used!');
          return null; // Return null to signal that we shouldn't attempt to parse the response further
      }})
      .then(data => {
        if (!data) return;
        
        console.log(data)
        if (data.userID) {
          Alert.alert('Success', 'Registration Complete! Please login again.');
          navigation.navigate("Login")
        } else {
          Alert.alert('Error', 'Email is already used!');
      }
      })
      .catch(error => {
        console.error('Error:', error);          
      });
  };


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: Colors.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: Colors.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>

        <Input
            onChangeText={text => handleOnchange(text, 'name')}
            onFocus={() => handleError(null, 'name')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />      

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phonenum')}
            onFocus={() => handleError(null, 'phonenum')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phonenum}
          />

          <SignUpButton title="Register" onPress={validate} />

          <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
            <Text style={{fontSize:17,color:Colors.darker_grey}} >Already have an account? </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>  
                <Text style={{fontSize:17, color:'#333'}} >Login!</Text>
              </TouchableOpacity>    
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;