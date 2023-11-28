import React, { Component } from "react";

import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator, Modal, Button, TouchableOpacity} from "react-native";

import { Ionicons, Foundation } from "@expo/vector-icons";
import ParkingSpotsCard from "../components/ParkingLotsCard";
import FaultReportingCard from "../components/FaultReportingCard";
import SearchCarparksCard from "../components/SearchCarparksCard";
import LogoutCard from "../components/LogoutCard";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "react-native-paper";
import colors from "../constants/Colors";
import VoiceRecCard from "../components/VoiceRecCard";
import data from "../assets/carpark.json";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showModal: false,
    
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
     

  };

 
   
  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView bounces={false}>
          <View style={styles.home}>
            <Text style={styles.text1}>Welcome Back!</Text>
            <View style={styles.view1}>
              <View style={styles.view8}>
                <Text style={styles.text2}>Find a spot. Take a nap.</Text>
              </View>

              <View>
                <Image
                  style={styles.image1}
                  source={require("../assets/Images/search_car.png")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              flexWrap: "wrap",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <ParkingSpotsCard
              onClick={() => this.props.navigation.navigate("Map")}
            />

            <SearchCarparksCard
              onClick={() => this.props.navigation.navigate("Search")}
            />
            <FaultReportingCard
              onClick={() => this.props.navigation.navigate("FaultReporting")}
            />

            <VoiceRecCard
              onClick={() => {
                this.setState({ showModal: true });
                this.toggleLoading();
              }}
            />

            <LogoutCard
              onClick={() => this.props.navigation.navigate("Login")}
            />

            <Modal transparent={true} visible={this.state.showModal}>
              <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    margin: 40,
                    padding: 40,
                    borderRadius: 20,
                    flex: 0,
                    width: 300,
                    justifyContent: "center",
                    height: 250,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("CarparkDetails", {
                        
                          data: {
                            car_park_no: "T0142",
                            latitude: 1.3131311428,
                            longitude: 103.6529735766,
                          },
                        
                      })
                    }
                  >
                    <Image
                      style={{
                        height: 90,
                        width: 90,
                        alignSelf: "center",
                      }}
                      source={require("../assets/Images/voice_icon.png")}
                    />

                    <View>
                      <Text style={styles.textListening}>Listening...</Text>
                    </View>
                  </TouchableOpacity>

                  {this.state.loading && (
                    <ActivityIndicator size="large" color="#0000ff" />
                  )}

                  <Button
                    title="Cancel"
                    onPress={() => {
                      this.setState({ showModal: false });
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  home: {
    backgroundColor: colors.clearBlue,
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },

  image1: {
    height: 100,
    width: 100,
  },

  view8: { flex: 4, marginTop: -25 },

  text1: {
    color: colors.white,
    fontSize: 22,
    paddingBottom: 5,
    paddingTop: 20,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
    paddingBottom: 20,
  },

  textListening: {
    
    fontSize: 18,
    paddingBottom: 10,
  },
});
