import React, { Component } from "react";

import {
  StyleSheet,
Text,
  View,
  BackHandler,
  SafeAreaView,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  StatusBar,
  ScrollView,
  Picker,
} from "react-native";

import { Ionicons, Foundation } from "@expo/vector-icons";
import colors from "../constants/Colors";
import style from "../constants/Styles";
import axios from "axios";

export class CarparkDetails extends Component {


//   state = {
//     data: this.props.navigation.state.params.data,
//     graphData: [],
//     graphDataXAxis: [],
//     graphLoading: true,
//     showDatePicker: false,
//     date: Date.now() - 24 * 60 * 60 * 1000 * 1,
//     dataVisualizationType: "day",
//   };
//   componentDidMount = () => {
//     this.fetchLotDetailsFormServer(Date.now() - 24 * 60 * 60 * 1000 * 1);
//   };
//   BackIcon = (style) => <Icon {...style} name="arrow-ios-back-outline" />;

//   BackAction = () => (
//     <TopNavigationAction
//       icon={this.BackIcon}
//       onPressIn={() => this.props.navigation.goBack()}
//     />
//   );
//   onDateChange = (date) => {
//     this.setDatePicker(false);
//     console.log(date.nativeEvent.timestamp);
//     if (date.nativeEvent.timestamp) {
//       this.setState({ date: date.nativeEvent.timestamp });
//       this.fetchLotDetailsFormServer(date.nativeEvent.timestamp);
//     }
//   };
//   fetchLotDetailsFormServer = (timestamp) => {
//     this.setState({ graphLoading: true });
//     let date = new Date(timestamp);
//     let dateString =
//       date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
//     if (this.state.dataVisualizationType === "day") {
//       axios
//         .post(
//           serverUrl + "/lot-history/" + this.state.data.pd_lot_id,
//           {
//             date: dateString,
//             // date: "21-1-2020",
//           },
//           {
//             headers: {
//               "jwt-token": this.context.state.loginData["jwt-token"],
//             },
//           }
//         )
//         .then((response) => {
//           this.setState({ graphLoading: false });
//           let graphDataTemp = [];
//           let graphDataXAxisTemp = [];
//           console.log(response.data);
//           if (!(response.data === "not available")) {
//             if (response.data.type === "day") {
//               let responseData = response.data;
//               delete responseData.pd_lot_id;
//               delete responseData.lh_id;
//               delete responseData.date;
//               delete responseData.type;
//               console.log(responseData);

//               for (let hourData in Object.keys(responseData)) {
//                 graphDataXAxisTemp.push(hourData);
//                 graphDataTemp.push(responseData[`hour_${hourData}`]);
//                 console.log(hourData, "-", responseData[`hour_${hourData}`]);
//               }
//             }
//           }

//           this.setState({
//             graphData: graphDataTemp,
//             graphDataXAxis: graphDataXAxisTemp,
//           });
//         })
//         .catch((error) => {
//           this.setState({ graphLoading: false });
//           console.log(error);
//         });
//     } else if (this.state.dataVisualizationType === "month") {
//       console.log(dateString);
//       axios
//         .post(serverUrl + "/lot-history-by-month/"+this.state.data.pd_lot_id, {
//           month: dateString.split("-")[1],
//           year: dateString.split("-")[0],
//           // date: "21-1-2020",
//         },
//         {
//           headers: {
//             "jwt-token": this.context.state.loginData["jwt-token"],
//           },
//         })
//         .then((response) => {
//           this.setState({ graphLoading: false });
//           let graphDataTemp = [];
//           let graphDataXAxisTemp = [];
//           console.log(response.data);
//           if (!(response.data === "not available")) {
//             if (response.data.type === "month") {
//               let responseData = response.data;
//               delete responseData.type;
//               delete responseData.month;
//               delete responseData.year;
//               // console.log(responseData);
//               for (let i in responseData) {
//                 graphDataTemp.push(Math.round(responseData[i]));
//                 graphDataXAxisTemp.push(i);
//                 console.log(i, "-", Math.round(responseData[i]));
//               }
//             }
//           }

//           this.setState({
//             graphData: graphDataTemp,
//             graphDataXAxis: graphDataXAxisTemp,
//           });
//         })
//         .catch((error) => {
//           this.setState({ graphLoading: false });
//           console.log(error);
//         });
//     }
//   };
//   onVisualizationTypeChange = (type) => {
//     this.setState({ dataVisualizationType: type }, () => {
//       this.fetchLotDetailsFormServer(this.state.date);
//     });
//   };
//   setDatePicker = (bool) => {
//     this.setState({ showDatePicker: bool });
//   };
  // getCarparkDetails(){
  //   this.props.route.params.data
  // }

  render() {
    // let lotInfo = this.state.data;
    // let currentDate = new Date(this.state.date);
   
   
    return (
      <View style={styles.container}>
               <View style ={styles.header}>
                <View style = {styles.icon1}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} >
                        <Ionicons
                        name ="arrow-back"
                        color = {colors.white}
                        size = {30}
                        />
                    </TouchableOpacity>
        

                </View>
            </View>

        <ScrollView>
            <View
              style={{
                marginHorizontal: 10,
                marginTop: 10,
                borderWidth: 0.1,
                borderColor: "black",
                padding: 20,
                borderRadius: 5,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
              }}
            >
              <Text
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#d9d9d9",
                  paddingBottom: 10,
                }}
              >
                Parking Lot Details
              </Text>
              <Text style={{ paddingTop: 10 }}>Name : </Text>
              <Text>Address :</Text>
              <Text>Total Spot : </Text>
              <Text>Occupied Spot : </Text>
              <Text>Hourly Rate : </Text>
            </View>

              
            </ScrollView>

      </View>
    );
  }
}

export default CarparkDetails;

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
});