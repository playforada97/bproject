import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Button, Title, Right} from 'native-base';

const ListScreen = () => {
  const tdata = [
    {name: 'test1', key: '1', age: '10'},
    {name: 'test2', key: '2', age: '1'},
    {name: 'test3', key: '3', age: '12'},
    {name: 'test4', key: '4', age: '13'},
    {name: 'test5', key: '5', age: '15'},
  ];

  return (
    <Container>
    <Header>
          <Left>
            <Button transparent>
              {/* <Icon name='menu' /> */}
            </Button>
          </Left>
          <Body>
            <Title>NewTechies</Title>
          </Body>
          <Right />
        </Header>
    <Content>
      <List>
        <ListItem>
          <Text>Simon Mignolet</Text>
        </ListItem>
        <ListItem>
          <Text>Nathaniel Clyne</Text>
        </ListItem>
        <ListItem>
          <Text>Dejan Lovren</Text>
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

export default ListScreen;
