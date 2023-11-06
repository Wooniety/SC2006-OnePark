import React, { Component } from "react";
import { Dimensions, View, Image, Text, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Button, IconButton } from "react-native-paper";
import BottomDrawer from "rn-bottom-sheet";
import * as Location from "expo-location";
import UserMarker from "../assets/Images/current_location.png";
import CPMarker from "../assets/Images/carparks_icon.png";

import { getCurrentLocation } from "../controllers/LocHandler";
import DisplayMapStyles from "../constants/DisplayCarparkStyles";

import {
  defaultUserLat,
  defaultUserLong,
  defaultLatDelta,
  defaultLongDelta,
} from "../constants/DefaultMapVar";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class Map extends Component {
  constructor() {
    super();

    watchId = undefined;

    this.state = {
      userLat: defaultUserLat,
      userLong: defaultUserLong,
      latDelta: defaultLatDelta,
      longDelta: defaultLongDelta,
      permissionGranted: false,
      coordinatesList: [],
    };

    this.getCurrentLocation = getCurrentLocation.bind(this);
  }

  componentWillMount() {
    this.requestCurrentLocation();
    this.state.coordinatesList = [
      { latitude: 1.316265, longitude: 103.682655 },
      { latitude: 1.346237, longitude: 103.182355 },
      { latitude: 1.346237, longitude: 103.682655 },
    ];
  }

  componentDidMount() {
    this.watchUserLocation();
  }

  componentWillUnmount() {
    console.log("Unsubscribing watch location now...");
  }

  requestCurrentLocation() {
    this.getCurrentLocation()
      .then((userLocation) => {
        if (!userLocation) {
          console.log("Permission is not granted!");
          this.displayDenyLocationScreen();
          return;
        }
        this.displayCurrentLocation(userLocation);
      })
      .catch((err) => console.log(err));
  }

  displayCurrentLocation(userLocation) {
    const screenLongDelta = this.state.latDelta * (width / height);
    this.setState({
      userLat: 1.346237, //userLocation.coords.latitude,
      userLong: 103.682655, //userLocation.coords.longitude,
      longDelta: screenLongDelta,
      permissionGranted: true,
    });
  }

  displayDenyLocationScreen() {
    this.props.navigation.navigate("denyLocation");
  }

  watchUserLocation() {
    this.watchId = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,

        timeInterval: 1000,
        distanceInterval: 0,
      },
      (location) => {
        this.setState(
          {
            //userLat: location.coords.latitude,
            userLat: 1.346237,
            userLong: 103.682655,
            //userLong: ocation.coords.longitude
          },
          () =>
            console.log(
              `Lat: ${this.state.userLat} Long: ${this.state.userLong}`
            )
        );
      }
    ).catch((err) => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.permissionGranted ? (
          <View style={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: this.state.userLat,
                longitude: this.state.userLong,
                latitudeDelta: this.state.latDelta,
                longitudeDelta: this.state.longDelta,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.state.userLat,
                  longitude: this.state.userLong,
                }}
                title={"You"}
                description={`${this.state.userLat}, ${this.state.userLong}`}
                pinColor={"green"}
              >
                <Image source={UserMarker} />
              </Marker>

              {this.state.coordinatesList.map((coordinates, index) => (
                <Marker
                  coordinate={coordinates}
                  title={"You"}
                  description={`${this.state.userLat}, ${this.state.userLong}`}
                  pinColor={"red"}
                  onPress={() =>
                    this.props.navigation.navigate("CarparkDetails", {
                      data: index,
                    })
                  } // Linking.openURL('http://www.google.com/maps/place/1.346249,+103.682673').catch((err) => console.errot('An error occurred: ',err))
                >
                  <Image source={CPMarker} />
                </Marker>
              ))}
            </MapView>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}
