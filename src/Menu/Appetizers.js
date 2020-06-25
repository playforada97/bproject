import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Button, Title, Right,Icon} from 'native-base';

const Appetizers = () => {
  return (
    <Container>
    <Header>
          <Left>
            <Button transparent>
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
              <Button transparent>
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

export default Appetizers;
