import React, { Component } from "react";

import {

  View,
  Text,

  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

export class ParkingLotsCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onClick()} style={{}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // padding: 20,
            height: 120,
            width: "45%",
            marginHorizontal: 5,
            marginTop: 20,
            borderColor: "#d9d9d9",
            // borderWidth: 1,
            borderRadius: 15,
            // backgroundColor:"#22558519"
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}
        >
          <Foundation
            name="map"
            size={50}
            color="black"
     
          />
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              //  color: Colors.primary
              color: "black",
            }}
          >
            Parking Lots
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ParkingLotsCard;
