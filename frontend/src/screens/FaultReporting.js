import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  BackHandler,
  SafeAreaView,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  StatusBar,
  ActivityIndicator,
  Alert,
  ToastAndroid,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import colors from "../constants/Colors";
import style from "../constants/Styles";
import { Ionicons, Foundation } from "@expo/vector-icons";


const FaultReporting = ({navigation}) => {
//   static contextType = GlobalContext;

//   state = {
//     selectLocationMapsModel: false,
//     location: false,
//     parkingLotName: "",
//     parkingLotNameError: false,
//     parkingLotAddress: "",
//     parkingLotAddressError: false,
//     parkingLotPinCode: "",
//     parkingLotPinCodeError: false,
//     hourlyRate: 0,
//     totalSpot: "",
//     partotalSpotError: false,
//     loadingSpinner: false,
//   };
//   BackIcon = (style) => <Icon {...style} name="arrow-ios-back-outline" />;

//   BackAction = () => (
// //     <TopNavigationAction
// //       icon={this.BackIcon}
// //       onPressIn={() => this.props.navigation.goBack()}
// //     />
// //   );

//   handleSignIn = () => {
//     let error = false;
//     if (this.state.parkingLotName.length == 0) {
//       this.setState({ parkingLotNameError: "required" });
//       error = true;
//     } else if (this.state.parkingLotName.length < 3) {
//       this.setState({ parkingLotNameError: "Minimum 3 character required" });
//       error = true;
//     } else {
//       this.setState({ parkingLotNameError: false });
//     }
//     if (this.state.parkingLotAddress.length == 0) {
//       this.setState({ parkingLotAddressError: true });
//       error = true;
//     } else {
//       this.setState({ parkingLotAddressError: false });
//     }
//     if (this.state.parkingLotPinCode.length == 0) {
//       this.setState({ parkingLotPinCodeError: true });
//       error = true;
//     } else {
//       this.setState({ parkingLotPinCodeError: false });
//     }
//     if (this.state.totalSpot.length == 0) {
//       this.setState({ partotalSpotError: true });
//       error = true;
//     } else {
//       this.setState({ partotalSpotError: false });
//     }
//     if (this.state.location === false) {
//       ToastAndroid.show("Please Select Location First", 2000);

//       error = true;
//     }
//     if (error) {
//       return;
//     }
//     this.setState({ loadingSpinner: true });

//     axios
//       .post(
//         serverUrl + "/parking" + this.context.state.loginData.user_user_id,
//         {
//           name: this.state.parkingLotName,
//           address: this.state.parkingLotAddress,
//           pin: this.state.parkingLotPinCode,
//           longitude: String(this.state.location.coords.longitude),
//           latitude: String(this.state.location.coords.latitude),
//           price: this.state.hourlyRate,
//           total: this.state.totalSpot,
//         },
//         {
//           headers: {
//             "jwt-token": this.context.state.loginData["jwt-token"],
//           },
//         }
//       )
//       .then((response) => {
//         this.setState({ loadingSpinner: false });

//         ToastAndroid.show("Parking Lot Created Successfully", 2000);
//       })
//       .catch((error) => {
//         this.setState({ loadingSpinner: false });
//         console.log(error);
//         if (
//           error.response &&
//           error.response.status === 400 &&
//           error.response.data == "Invalid Data"
//         ) {
//           ToastAndroid.show("Invalid Data", 2000);
//         } else {
//           ToastAndroid.show("Something went wrong, please try again", 2000);
//         }
//       });
//   };

//   onSelectMapClose = (loc) => {
//     this.setState({ selectLocationMapsModel: false });
//     this.setState({ location: loc });
//   };
//   onChange = (name, e) => {
//     let text = e.nativeEvent.text;
//     this.setState({ [name]: text });
//   };
//   handleSelectLocation = () => {
//     this.setState({ selectLocationMapsModel: true });
//   };

  // BackIcon = (style) => <Icon {...style} name="arrow-ios-back-outline" />;

  // BackAction = () => (
  //   <TabActions
  //     icon={this.BackIcon}
  //     onPressIn={() => this.props.navigation.goBack()}
  //   />
  // );

  
    return (
      <View style={styles.container}>
        
            <View style ={styles.header}>
                <View style = {styles.icon1}>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")} >
                        <Ionicons
                        name ="arrow-back"
                        color = {colors.white}
                        size = {30}
                        />
                    </TouchableOpacity>
        

                </View>
            </View>

            <ScrollView bounces = {false}>

              <View style ={styles.home}>
                  <Text style = {styles.text1}>Fault Reporting</Text>
                  <View style ={styles.view1}>
                      <View  style ={styles.view8}>
                          <Text style ={styles.text2}>Notice issues wth a carpark? Let us know!</Text>
                      </View>
                  </View>
              </View>            


         

          <View
            style={{
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={style.style.input }>
              <TextInput
                maxLength={50}
                onChange={(text) => this.onChange("parkingLotName", text)}
                style={{
                  width: "85%",
              
                }}
                placeholder="Parking Lot Name"
                require
              ></TextInput>
            </View>


      
            <View style={style.style.input}>
            
              <TextInput
                keyboardType="number-pad"
                maxLength={20}
                onChange={(text) => this.onChange("parkingLotCode", text)}
                style={{
                  width: "85%",
            
                }}
                placeholder="Parking Lot Code"
                require
              ></TextInput>
            </View>
      

            <View style={style.style.input}>
              <TextInput
              
                maxLength={20}
                onChange={(text) => this.onChange("Description of Fault", text)}
                style={{
                  width: "85%",
                  // ,fontSize:10
                }}
                placeholder="Description of Fault"
                require
              ></TextInput>
            </View>
            <View
              // style={[
              //   style.style.input,
              //   this.state.partotalSpotError
              //     ? { borderColor: "red", borderWidth: 1 }
              //     : {},
              // ]}
            >
            </View>

            <View
              style={{
                flexDirection: "row",
                //   backgroundColor: "#666",
                justifyContent: "center",
                width: "80%",
                // backgroundColor:"red",
                padding: 0,
                marginBottom: 0,
              }}
            >
          
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={() => {
                //   this.handleSelectLocation();
                // }}
                style={{
                  alignItems: "left",
                  justifyContent: "center",
                  width: "100%",
                  marginVertical: 20,
                  borderWidth: 0.1,
                  borderColor: colors.primary,
                  padding: 10,
                  //   marginTop: 20,
                  marginBottom: 0,
                  borderRadius: 10,
                  flexDirection: "row",
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}
              >
                <View>
                  <Ionicons
              name="camera"
              size={20}
              color="black"
            />
                </View>
              </TouchableOpacity>
            </View>
    


      
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.handleSignIn();
                }}
                style={{
                  alignItems: "center",
                  width: "100%",
                  marginVertical: 30
                }}
              >
                <View style={style.style.button}>
                  <Text style={{ color: "white" }}>Submit</Text>
                </View>
              </TouchableOpacity>


          </View>

             </ScrollView>
      </View>
    );
  
}

export default FaultReporting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icon1:  {
  marginLeft:10,
  marginTop:5
  },

  header:{
  backgroundColor:colors.clearBlue,
  alignItems:"flex-start",
  height:50,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20
    
  }, 

    text1:{
  color:colors.white,
  fontSize:22,
  paddingBottom:5,
  paddingTop:20

  },

  text2:{
    color:colors.white,
    fontSize:16,
    paddingBottom: 20
  },

  view1:{
    flexDirection:"row",
    flex:1,
    paddingTop:30
  },

  view8: {flex:4,
      marginTop:-25
  } ,

      home:{
  backgroundColor:colors.clearBlue,
  paddingLeft:20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20
  }


});
