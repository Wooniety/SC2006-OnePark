import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
  Alert,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/Colors";
import style from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const FaultReporting = ({ navigation }) => {

  const [inputs, setInputs] = React.useState({
    carparkName: "",
    carparkCode: "",
    description: "",
  })

  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = React.useState({})

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.carparkName) {
      handleError("Please input Carpark Name!", "carparkName");
      isValid = false;
      Alert.alert("Error", "Please fill up the Carpark Name!");
    } else if (!inputs.carparkCode) {
      handleError("Please input Carpark Code!", "carparkName");
      isValid = false;
      Alert.alert("Error", "Please fill up the Carpark Code!");
    } else if (!inputs.description) {
      handleError("Please input a Description!", "carparkName");
      Alert.alert("Error", "Please fill up the description!");
      isValid = false;
    }
    else if (isValid) {
      submit();
      
    }
  };

  const submit = () =>{
      setShowModal(true);
  }
  

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Ionicons name="arrow-back" color={colors.white} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Fault Reporting</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                Notice issues wth a carpark? Let us know!
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={style.style.input}>
            <TextInput
              maxLength={20}
              onFocus={() => handleError(null, "carparkName")}
              placeholder="Enter Carpark Name"
              onChangeText={(text) => handleOnchange(text, "carparkName")}
              style={{
                width: "85%",
              }}
              error={errors.carparkName}
            ></TextInput>
          </View>

          <View style={style.style.input}>
            <TextInput
              maxLength={20}
              placeholder="Enter Carpark Code"
              onFocus={() => handleError(null, "carparkCode")}
              onChangeText={(text) => handleOnchange(text, "carparkCode")}
              style={{
                width: "85%",
              }}
              error={errors.carparkCode}
            ></TextInput>
          </View>

          <View style={style.style.input}>
            <TextInput
              maxLength={20}
              onFocus={() => handleError(null, "description")}
              placeholder="Description of Fault"
              onChangeText={(text) => handleOnchange(text, "description")}
              style={{
                width: "85%",
              }}
              error={errors.description}
            ></TextInput>
          </View>

          {/* <View
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
                borderColor: colors.primary,
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
                <Ionicons name="camera" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              validate();
            }}
            style={{
              alignItems: "center",
              width: "100%",
              marginVertical: 30,
            }}
          >
            <View style={style.style.button}>
              <Text style={{ color: "white" }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} visible={showModal}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 40,
                padding: 40,
                borderRadius: 20,
                flex: 1,
              }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/Images/success_icon.png")}
              />
              <Text style={{ fontSize: 25 }}>Thank You for your Feedback!</Text>
              <Text style={{ fontSize: 12, paddingTop: 10 }}>Ref No: #01:</Text>
              <Text style={{ fontSize: 18, paddingTop: 10 }}>
                Summary of Report:
              </Text>

              <Text style={{ fontSize: 15, paddingTop: 15 }}>
                Carpark Name: {inputs.carparkName}
              </Text>
              <Text style={{ fontSize: 15, paddingTop: 5 }}>
                Carpark Code: {inputs.carparkCode}
              </Text>
              <Text style={{ fontSize: 15, paddingTop: 5, paddingBottom: 80 }}>
                Description of Fault: {inputs.description}
              </Text>

              <Button
                title="close"
                onPress={() => {
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default FaultReporting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },

  icon1: {
    marginLeft: 10,
    marginTop: 5,
  },

  header: {
    backgroundColor: colors.clearBlue,
    alignItems: "flex-start",
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

  home: {
    backgroundColor: colors.clearBlue,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
