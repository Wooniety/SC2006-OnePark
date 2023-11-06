import React, { useState, useRef, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
import colors from "../constants/Colors";
// import {
//   getSearchCarpark,
//   updateCarparkWithLotAvailability,
// } from "../controllers/CarparkData";

const searchSaved = [
  { id: "1", text: "sakjkjdd" },
  { id: "2", text: "sasds" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "AMK Ave 6" },
  { id: "5", text: "Item 3" },
  { id: "6", text: "AMK Ave 6" },
  { id: "7", text: "Item 3" },
  { id: "8", text: "AMK Ave 6" },
  { id: "9", text: "Item 3" },
  { id: "10", text: "AMK Ave 6" },
  { id: "11", text: "Item 3" },
  { id: "12", text: "AMK Ave 6" },
  { id: "13", text: "Item 3" },
  { id: "14", text: "AMK Ave 6" },
  { id: "15", text: "Item 3" },
  { id: "16", text: "AMK Ave 6" },
  { id: "17", text: "Item 3" },
];

export default class SearchSaved extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     carParkInfo: undefined,
  //     isFetching: false,
  //   };

  //   this.getSearchCarpark = getSearchCarpark.bind(this);
  //   this.updateCarparkWithLotAvailability =
  //     updateCarparkWithLotAvailability.bind(this);
  // }

  /**
   * This function quries a list of carpark info base on user's input of
   * carpark address name
   */

  // requestCarparkList(carparkAddress) {
  //   if (!carparkAddress) return;
  //   this.setState({ isFetching: true });

  //   // Search the address of carpark in the database using the input
  //   this.getSearchCarpark(carparkAddress).then((value) => {
  //     this.setState({ carParkInfo: value, isFetching: false });
  //   });
  // }

  render() {
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
          <View style={styles.home}>
            <Text style={styles.text1}>Search for a Carpark!</Text>
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

          <View>
            <View style={styles.view3}>
              <TextInput
                style={styles.text3}
                maxLength={20}
                onChange={(text) => this.onChange("Search Carpark", text)}
                placeholder="Search Carpark"
              ></TextInput>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Menu")}
              >
                <Ionicons
                  name="search"
                  color={colors.black}
                  size={23}
                  marginRight={12}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view4}>
            <View style={styles.view2}>
              <TouchableOpacity
              >
                <Image
                  style={styles.image2}
                  source={require("../assets/Images/save_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Saved</Text>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SearchNearby")}
              >
                <Image
                  style={styles.image2}
                  source={require("../assets/Images/save_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Nearby</Text>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SearchPrice")}
              >
                <Image
                  style={styles.image2}
                  source={require("../assets/Images/price_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Price</Text>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("SearchSeasonal")
                }
              >
                <Image
                  style={styles.image2}
                  source={require("../assets/Images/parking_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Seasonal</Text>
            </View>
          </View>

          <View style={styles.List}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={searchSaved}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    style={styles.ListItem}
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
                    <Text>{item.text}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },

  icon1: {
    marginLeft: 10,
    marginTop: 5,
  },

  text1: {
    color: colors.white,
    fontSize: 22,
    paddingBottom: 5,
    paddingTop: 20,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
    paddingBottom: 20,
  },

  view1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  view8: { flex: 4, marginTop: -25 },

  header: {
    backgroundColor: colors.clearBlue,
    alignItems: "flex-start",
    height: 40,
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  home: {
    backgroundColor: colors.clearBlue,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  image1: {
    height: 80,
    width: 80,
  },

  view3: {
    flexDirection: "row",
    marginTop: 15,
    height: 45,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.grey,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },

  text3: { marginLeft: 15, fontSize: 17, color: colors.black },

  card: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 22,
  },

  title: {
    color: colors.black,
    fontSize: 13,
    textAlign: "center",
  },

  view4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
    marginHorizontal: 15,
  },

  image2: {
    height: 30,
    width: 30,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 12,
  },

  view2: {
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 70,
    width: 80,
    borderWidth: 1,
    borderColor: colors.grey,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },

  searchBtn: {
    marginTop: "3%",
  },

  text: {
    fontSize: 24,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  List: {
    marginTop: "5%",
    marginLeft: 5,
    marginRight: 5,
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
  },

  ListItem: {
    padding: 20,
    marginHorizontal: 16,
  },
});
