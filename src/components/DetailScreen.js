import React from 'react';
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

const DetailScreen = ({ route, navigation}) => {
  const { title, body } = route.params;
  navigation.setOptions({ title });

  getListItem = () => {
    const { title, body } = route.params;
    let lItem = body.map((item) => {
      return (
        <ListItem>
        <Left>
          <Text>{item}</Text>
        </Left>
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
	}
  });

export default DetailScreen;
