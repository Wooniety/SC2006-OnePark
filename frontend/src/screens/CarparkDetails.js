import React, { Component } from "react";
import { LineChart } from "react-native-chart-kit";

import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
  Image
  
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
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

  state = {
    linegraph: {
      labels: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
      datasets: [
        {
          label: "# of Lots Taken",
          data: [
            0.6962292609351433, 0.7081447963800905, 0.7147058823529412,
            0.7110859728506788, 0.7054298642533937, 0.7013574660633484,
            0.6938914027149321, 0.6699095022624434, 0.6076923076923076,
            0.5380090497737556, 0.4755656108597285, 0.36855203619909505,
            0.2520361990950226, 0.251131221719457, 0.3420814479638009,
            0.4656108597285068, 0.5289592760180996, 0.5481900452488688,
            0.5134238310708898, 0.468552036199095, 0.4984162895927602,
            0.5920814479638009, 0.6410256410256411, 0.6739819004524887,
          ],
        },
      ],
    },
    data: {},
  };

  fetchData = async () => {
    try {
      const response = await fetch(
        `http://thebigsad.southeastasia.cloudapp.azure.com:3000/carparks/carpark-availability/$%7Bthis.props.route.params.data.car_park_no%7D`
      );
      const jsonData = await response.json();
      this.setState({data: jsonData});
      console.log(this.state.data);
    } catch (err){
      console.log(err);
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    let lotInfo = this.state.data;
    

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icon1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Menu")}
            >
              <Ionicons name="arrow-back" color={colors.white} size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 15,
              borderWidth: 0.1,
              borderColor: "black",
              padding: 20,
              borderRadius: 15,
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
            <View style={styles.savedButtonRow}>
              <Text
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#d9d9d9",
                  paddingBottom: 10,
                  fontSize: 20,
                }}
              >
                Parking Lot Details
              </Text>
              <TouchableOpacity
                onPress={() => {
                 alert("Carpark Saved!")
                }}
              >
                <Image
                  style={styles.savedButton}
                  source={require("../assets/Images/save_icon.png")}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 15, paddingTop: 10 }}>
              Name : {this.props.route.params.data.car_park_no}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 3 }}>
              Address : {lotInfo.ppName}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 3 }}>
              Total Spot : {lotInfo.parkCapacity}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 3 }}>
              Occupied Spot : {lotInfo.carLotsAvailable}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 3 }}>
              Hourly Rate : {lotInfo.weekdayRate}
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 3, paddingBottom: 10 }}>
              Availability (%):
            </Text>

            <LineChart
              data={this.state.linegraph}
              width={300}
              height={200}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: "#1cc910",
                backgroundGradientFrom: "#eff3ff",
                backgroundGradientTo: "#efefef",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Linking.openURL(
                `https://www.google.com/maps/dir/50+Nanyang+Ave,+Singapore+639798/${this.props.route.params.data.latitude},${this.props.route.params.data.longitude}/@1.3429842,103.6809897`
              ).catch((err) => console.errot("An error occurred: ", err));
            }}
            style={{
              alignItems: "center",
              width: "100%",
              marginVertical: 30,
            }}
          >
            <View style={styles.google_btn}>
              <Image
                style={styles.googleMaps_img}
                source={require("../assets/Images/googleMaps_icon.png")}
              />
              <Text style={{ color: "black" }}>View in Google Maps</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default CarparkDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  icon1: {
    marginLeft: 10,
    marginTop: 10,
  },

  header: {
    backgroundColor: colors.clearBlue,
    alignItems: "flex-start",
    height: 50,
    marginTop: 5,
    borderRadius: 20,
  },

  google_btn: {
    backgroundColor: colors.white,
    height: 50,
    width: "50%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },

  googleMaps_img: {
    width: 25,
    height: 25,
    marginRight: 5,
  },

  savedButtonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  savedButton: {
    width: 25,
    height: 25,
  },
});
