import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Container, Content } from "native-base";
import { State } from "react-native-gesture-handler";

const ShoppingCartScreen = (props) => {
  listOfItems = () => {
    let list = props.cartItems.map((item) => {
      // console.log('itre',item);
      return (
        <View>
          <Text>Item added</Text>
        </View>
      );
    });
    return list;
  };

  return (
    <View>
      {this.listOfItems()}
      <Text>{props.cartItems.length}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect(
  mapStateToProps,
  null
)(ShoppingCartScreen);
