import React,{useState,useRef,useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions ,ScrollView,Image,FlatList,TouchableOpacity, TextInput} from 'react-native'
import { Ionicons, Foundation } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width
import colors from '../constants/Colors';

const Search = ({navigation}) => {


    return (
        <View style ={styles.container}>
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

            <ScrollView bounces ={false}>
    
                        
                <View style ={styles.home}>
                    <Text style = {styles.text1}>Search for a Carpark!</Text>
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

            
                <View>
                    <View style = {styles.view3}>
                        <TextInput style = {styles.text3}
                            maxLength={20}
                            onChange={(text) => this.onChange("Search Carpark", text)}
     
                            placeholder="Search Carpark"
            
                         ></TextInput>

                    </View>

                    
                </View>


                <View style = {styles.view4}>

                    <View style = {styles.view2}>
                        <TouchableOpacity>

                            <Image 
                            style ={styles.image2}
                            source = {require('../assets/Images/save_icon.png')}
                            />  

                        </TouchableOpacity>
                        <Text style ={styles.title}>Saved</Text>
                    </View>
                      <View style = {styles.view2}>
                        <TouchableOpacity>
                          <Image 
                            style ={styles.image2}
                            source = {require('../assets/Images/save_icon.png')}
                            />                     
                        </TouchableOpacity>
                        <Text style ={styles.title}>Nearby</Text>
                    </View>
                     <View style = {styles.view2}>
                        <TouchableOpacity>
                          <Image 
                            style ={styles.image2}
                            source = {require('../assets/Images/price_icon.png')}
                            />                      
                        </TouchableOpacity>
                        <Text style ={styles.title}>Price</Text>
                    </View>
                    <View style = {styles.view2}>
                        <TouchableOpacity>
                          <Image 
                            style ={styles.image2}
                            source = {require('../assets/Images/parking_icon.png')}
                            />                    
                        </TouchableOpacity>
                        <Text style ={styles.title}>Seasonal</Text>
                    </View>                                     
                          

                </View>

            </ScrollView>
            <StatusBar style = "dark" translucent = {true} />
            
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:30,
    paddingTop: 25
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },

    icon1:  {
    marginLeft:10,
    marginTop:5
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

    header:{
    backgroundColor:colors.clearBlue,
    alignItems:"flex-start",
    height:50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
     
    },

    home:{
    backgroundColor:colors.clearBlue,
    paddingLeft:20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
    },

    image1:{
    
    height:100,
    width:100,

    },

    view3:{flexDirection:"row",
            marginTop :15,
            height:45,
            backgroundColor:colors.white,
            alignItems:"center",
            justifyContent:"space-between",
            marginHorizontal:4,
            borderRadius:14,
            borderWidth:1,
            borderColor:colors.grey,
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.20,
            shadowRadius: 4.65,
            elevation: 8,
        
            },

    text3:{marginLeft:15,
        fontSize:17,
        color:colors.black
},


    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22
    
    },


    title:{
        color:colors.black,
        fontSize:13,
        textAlign: "center",
        
    
     
    },

    view4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: "center",
        marginHorizontal:15
    },

    image2:{
        height:30,
        width:30,
        marginLeft:25,
        marginRight:25,
        marginTop: 12,
     
    
        
        },

    view2:{
        
        marginBottom:5,
        borderRadius:20,
        backgroundColor: "#fff",
        height: 70,
        width: 80,
        borderWidth: 1,
        borderColor:colors.grey,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.65,
        elevation: 8,

        
    },


});