import React from 'react';
import {Text, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, Left, Button, Right,Icon} from 'native-base';

const MenuScreen = ({navigation}) => {
  console.log('navigation',navigation);
  return (
    <Container>
        <Content>
          <List>
            <ListItem >
              <Left>
                <Text>Appetizers</Text>
              </Left>
              <Right>
              <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Appetizers',
                    body: 'Appetizers Body'
                    //we can pass a new component in body
                  })
                }}
              > 
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Main Couse</Text>
              </Left>
              <Right>
                <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Main Couse',
                    body: 'Main Couse Body'
                    //we can pass a new component in body
                  })
                }}
              > 
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Biryanis</Text>
              </Left>
              <Right>
              <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Biryanis',
                    body: 'Biryanis Body'
                    //we can pass a new component in body
                  })
                }}
              > 
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Rice & Noodles</Text>
              </Left>
              <Right>
              <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Rice & Noodles',
                    body: 'Rice & Noodles Body'
                    //we can pass a new component in body
                  })
                }}
              > 
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Roti</Text>
              </Left>
              <Right>
              <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Roti',
                    body: 'Roti Body'
                    //we can pass a new component in body
                  })
                }}
              >
                <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Deserts</Text>
              </Left>
              <Right>
              <Button 
                transparent 
                onPress={() => {
                  navigation.navigate('Detail', {
                    title: 'Deserts',
                    body: 'Deserts Body'
                    //we can pass a new component in body
                  })
                }}
              >
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
export default MenuScreen;
