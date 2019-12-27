/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Icon,
  Image,
  TextInput,
  render,
  TouchableOpacity
} from "react-native";

class List extends Component {
  data = {
    categoryName: "Category",
    imageUri: require("../../assets/images/home.jpg"),
    name: "NGO 1",
    email: "abc@xyz",
    phoneNumber: "9999999",
    address: "address",
    city: "city",
    pinCode: "9998784",
    state: "delhi",
    country: "india"
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 1,
          borderColor: "#dddddd"
        }}
        onPress={() => {
          this.props.data.category = this.props.category
          this.props.data.imageUri = this.props.imageUri
          this.props.listDetail(this.props.data)
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ paddingLeft: 25, paddingTop: 10 }}>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default List;
const styles = StyleSheet.create({
  textContainer: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  parentContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 1
  }
});
