import React from "react";
import { Text, StyleSheet } from "react-native";
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

const Items = [
   {'title': 'Appetizers', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
  //  {'title': 'Main Couse', 'body': ['Mainitem1', 'Mainitem2', 'Mainitem3']},
  //  {'title': 'Biryanis', 'body': ['Biryanisitem1', 'Biryanisitem2', 'Biryanisitem3']},
  //  {'title': 'Rice & Noodles', 'body': ['Riceitem1', 'Riceitem2', 'Riceitem3']},
  //  {'title': 'Roti', 'body': ['Rotiitem1', 'Rotiitem2', 'Rotiitem3']},
  //  {'title': 'Deserts', 'body': ['Desertsitem1', 'Desertsitem2', 'Desertsitem3']},
];

const MenuScreen = ({ navigation }) => {
  
  getListItem = () => {
    let lItem = Items.map((item) => {
      return (
        <ListItem selected Button
        transparent
        onPress={() => {
          navigation.navigate("Detail", {
            title: item.title,
            item: item.item,
            //we can pass a new component in body
          });
        }} >
        <Left>
          <Text>{item.title}</Text>
        </Left>
        <Right>
            <Icon name="arrow-forward" />
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default MenuScreen;
