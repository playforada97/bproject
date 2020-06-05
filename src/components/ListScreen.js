import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const tdata = [
    {name: 'test1', key: '1', age: '10'},
    {name: 'test2', key: '2', age: '1'},
    {name: 'test3', key: '3', age: '12'},
    {name: 'test4', key: '4', age: '13'},
    {name: 'test5', key: '5', age: '15'},
  ];

  return (
    <FlatList
		style={{paddingLeft: 40, margin: 20}}
		data={tdata}
      	renderItem={({item}) => {
			  console.log('item',item);
        	return <Text style={{padding: 10}}>{item.name}</Text>
     	 }}
    />
  );
};

const styles = StyleSheet.create({
	list: {
	  flex: 1,
	}
  });

export default ListScreen;
