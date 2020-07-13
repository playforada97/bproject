import React from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { Icon } from "native-base";

const ShoppingCartIcon = (props) => {
  return (
    <View style={{ padding: 5 }} >
	  <TouchableOpacity onPress={() => {
		props.navigation.navigate("Cart");
	  }}>
	  <View style={styles.cart}>
        <Text>{props.cartItems.length}</Text>
      </View>
      <Icon name="cart" size={30} />
	  </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
	cart: {
    position: "absolute",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "rgba(95,197,123,0.8)",
    right: 15,
    bottom: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
});

const mapStateToProps = (state) => {
	return {
		cartItems: state
	}
}

export default connect(mapStateToProps)(ShoppingCartIcon);
