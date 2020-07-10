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
   {'title': 'Appetizers', 'body': 'Appetizers Body'},
   {'title': 'Main Couse', 'body': 'Main Couse Body'},
   {'title': 'Biryanis', 'body': 'Biryanis Body'},
   {'title': 'Rice & Noodles', 'body': 'Rice & Noodles Body'},
   {'title': 'Roti', 'body': 'Roti Body'},
   {'title': 'Deserts', 'body': 'Deserts Body'},
];

const MenuScreen = ({ navigation }) => {
  
  getListItem = () => {
    let lItem = Items.map((item) => {
      return (
        <ListItem>
        <Left>
          <Text>{item.title}</Text>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() => {
              navigation.navigate("Detail", {
                title: item.title,
                body: item.body,
                //we can pass a new component in body
              });
            }}
          >
            <Icon name="arrow-forward" />
          </Button>
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
