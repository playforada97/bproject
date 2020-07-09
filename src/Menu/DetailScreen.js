import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Content} from 'native-base';

const DetailScreen = ({ route, navigation}) => {
  const { title, body } = route.params;
  navigation.setOptions({ title });
  return (
    <Container>
        <Content>
          <Text>{body}</Text>
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
