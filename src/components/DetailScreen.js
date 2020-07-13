import React from 'react';
import { Connect, connect } from 'react-redux';

import {Text, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Button,
  Right,
  Icon,
} from "native-base";

const DetailScreen = (props) => {
  const { route, navigation} = props;
  // navigation.setOptions({ title });

  getListItem = () => {
    console.log();
    const { route} = props;
    const { item } = route.params;
    console.log(item);
    let lItem = item.map((i) => {
      return (
        <ListItem onPress={() => props.addItemToCart(i)}>
        <Left>
          <Text>{i.name}</Text>
        </Left>
        <Right>
          <Text>{i.price}</Text>
        </Right>
      </ListItem>
      );
    });
    return lItem;
  };

  return (
    <Container>
        <Content>
        <List>
          {this.getListItem()}
        </List>
      </Content>
  </Container>
  );
};

const mapDispatchTpProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch({type:
      'ADD_TO_CART', payload: item})
  }
}

export default connect(null, mapDispatchTpProps)(DetailScreen);
