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
} from "react-native";

import Colors from "../constants/Colors";
import style from "../constants/Styles";
import { Ionicons, Foundation } from "@expo/vector-icons";


export class FaultReporting extends Component {
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

  render() {
    return (
      <View style={styles.container}>



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
                borderColor: Colors.primary,
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
                marginVertical: 30,
              }}
            >
              <View style={style.style.button}>
                <Text style={{ color: "white" }}>Add</Text>
              </View>
            </TouchableOpacity>
    
            <ActivityIndicator
              style={{ height: 50, marginVertical: 30 }}
              size="large"
              color={Colors.primary}
            />
        </View>
      </View>
    );
  }
}

export default FaultReporting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
