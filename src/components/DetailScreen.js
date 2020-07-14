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
  Thumbnail,
  Icon,
  Body,
  H3,
} from "native-base";

const DetailScreen = (props) => {
  const { route, navigation} = props;
  //navigation.setOptions({ title });

  getListItem = () => {
   // console.log();
    const { route} = props;
    const { item } = route.params;
    console.log(item);
    let lItem = item.map((i) => {
      return (
        <ListItem thumbnail >
        <Left>
        <Thumbnail square source={i.image} />
        </Left>
        <Body>
          <Text>{i.name}</Text>
          <Text note style ={{color:'#d3d3d3'}}>{i.note}</Text>
        </Body>
        <Right>
          <Text>{i.price}</Text>
          <Icon  name="cart" onPress={() => props.addItemToCart(i)} />
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
