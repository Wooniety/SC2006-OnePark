import React, { Component } from "react";

import {
  StyleSheet,
  View,
 
} from "react-native";


import ParkingSpotsCard from "../components/ParkingLotsCard";
import FaultReportingCard from "../components/FaultReportingCard";
import SearchCarparksCard from "../components/SearchCarparksCard";


export class Menu extends Component {


  render() {
    return (
      <View style={styles.container}>
    

        <View
          style={{
            flexDirection: "row",
            
            justifyContent: "space-between",
            marginHorizontal: 20,
         
            flexWrap: "wrap",
      
          }}
        >
       
          <ParkingSpotsCard
            onClick={() => this.props.navigation.navigate("ParkingLotsMap")}
          />

          <FaultReportingCard
            onClick={() => this.props.navigation.navigate("FaultReporting")}
          />

          <SearchCarparksCard
            onClick={() => this.props.navigation.navigate("ParkingLotsMap")}
          />

          {/* <Settings
            onClick={() => this.props.navigation.navigate("ParkingLotsMap")}
          />  */}


        </View>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});







// WORKING CODES BELOW:


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, StatusBar,Image } from 'react-native'
// import {Colors} from '../../src/constants'

// const Testing = ({navigation}) => {

//     return (
//         <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.primary}} >
//             <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
//             <Image source={require('../assets/Images/icon.png')} style={{width:50,height:50}}  />    
//             <Text style={{fontSize:30,color:Colors.white}} >testing</Text>
//         </View>
//     )

// }
// export default Testing

// const styles = StyleSheet.create({})
