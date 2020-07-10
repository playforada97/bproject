import React from 'react';
import { Text } from 'react-native';
import {Container, Content} from 'native-base';

const HomeScreen = ({navigation}) => {
    return(
      <Container>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
			    <Text>Home Screen</Text>
		    </Content>
      </Container>
    );
  }

export default HomeScreen;
