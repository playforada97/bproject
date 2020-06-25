import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from "react-navigation";
import {NavigationContainer} from '@react-navigation/native';
import { Container, Header, Content, List, ListItem, Left, Body, Button, Title, Right,Icon} from 'native-base';
import Appetizers from '../Menu/Appetizers';
const MenuScreen = ({navigation}) => {
  return (
    <Container>
    <Header>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title> Menu</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem >
              <Left>
                <Text>Appetizers</Text>
              </Left>
              <Right>
              <Button transparent onPress={() => navigation.navigate('Appetizers')}>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Main Couse</Text>
              </Left>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Biryanis</Text>
              </Left>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text> Rice & Noodles</Text>
              </Left>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text> Roti</Text>
              </Left>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Deserts </Text>
              </Left>
              <Right>
                <Button transparent>
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
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

      // <FlatList
		// style={{paddingLeft: 40, margin: 20}}
		// data={tdata}
    //   	renderItem={({item}) => {
		// 	  console.log('item',item);
    //     	return <Text style={{padding: 10}}>{item.name}</Text>
    //  	 }}
    // />
export default MenuScreen;
