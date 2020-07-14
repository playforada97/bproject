import React from "react";
import { Text, StyleSheet,Image } from "react-native";
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
    {name: 'ONION PAKORA', price: '$6.50', image: require('../Appetizer_images/onion_pakoda.png'), note:'Its Onion Pakora'},
    {name: 'VEG MANCHURIAN', price: '$6.50', image: require('../Appetizer_images/veg-manchurian.png')},
    {name: 'GOBI MANCHURIAN', price: '$6.50', image: require('../Appetizer_images/veg-manchurian.png')},
    {name: 'GINGER VEGETABLE', price: '$6.50', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'PANEER TIKKA', price: '$8.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'VEGETABLE CUTLET (3P)', price: '$6.50', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'CHICKEN PAKORA', price: '$6.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'CHICKEN MANCHURIAN', price: '$7.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'CHILLY CHICKEN', price: '$7.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'GINGER CHICKEN', price: '$7.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'FISH FRY', price: '$8.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'SHRIMP FRY', price: '$8.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'CHILLY SHRIMP', price: '$8.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'CHICKEN 65', price: '$7.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'MUTTON FRY', price: '$9.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'MUTTON ROAST', price: '$9.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'MUTTON MUNCHURIA', price: '$9.95', image: require('../Appetizer_images/veg-manchurian.png')},
     {name: 'GINGER MUTTON', price: '$9.95', image: require('../Appetizer_images/veg-manchurian.png')},
  ]},
    {'title': 'Main Couse', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
  {'title': 'Biryanis', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
    {'title': 'Rice & Noodles', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
   {'title': 'Roti', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
    {'title': 'Deserts', 'item': [ 
     {name: 'Appetizersitem1', price: '10.99'},
     {name: 'Appetizersitem2', price: '1.99'},
     {name: 'Appetizersitem3', price: '20.99'},
  ]},
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
