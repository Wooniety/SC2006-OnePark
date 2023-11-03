import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
 
} from "react-native";

import { Ionicons, Foundation } from "@expo/vector-icons";
import ParkingSpotsCard from "../components/ParkingLotsCard";
import FaultReportingCard from "../components/FaultReportingCard";
import SearchCarparksCard from "../components/SearchCarparksCard";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "react-native-paper";
import colors from '../constants/Colors';


export class Menu extends Component {


  render() {
    return (
      <View style={styles.container}>

            <ScrollView bounces ={false}>

              <View style ={styles.home}>
                  <Text style = {styles.text1}>Welcome Back!</Text>
                  <View style ={styles.view1}>
                      <View  style ={styles.view8}>
                          <Text style ={styles.text2}>Find a spot. Take a nap.</Text>
                      </View>

                      <View>
                          <Image 
                              style ={styles.image1}
                              source = {require('../assets/Images/search_car.png')}
                          />    
                      </View>
                  </View>
              </View>





        <View
          style={{
            flexDirection: "row",        
            justifyContent: "space-between",
            marginHorizontal: 20,        
            flexWrap: "wrap-reverse" ,
            marginTop: 20,
      
          }}
        >      


          <SearchCarparksCard
            onClick={() => this.props.navigation.navigate("Search")}
          />
          <FaultReportingCard
            onClick={() => this.props.navigation.navigate("FaultReporting")}
          />
          <ParkingSpotsCard
            onClick={() => this.props.navigation.navigate("Map")}
          />




          {/* <Settings
            onClick={() => this.props.navigation.navigate("ParkingLotsMap")}
          />  */}


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


  home:{
    backgroundColor:colors.clearBlue,
    paddingLeft:20,
    borderRadius: 14
    
    },

    image1:{
    
    height:100,
    width:100,

    },

      view8: {flex:4,
      marginTop:-25
  } ,

    text1:{
    color:colors.white,
    fontSize:22,
    paddingBottom:5,
    paddingTop:20

    },

    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },

    text2:{
     color:colors.white,
     fontSize:16,
     paddingBottom: 20
    },

});



