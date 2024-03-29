import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Content, Left, Icon, Body, Button, Title, Right} from 'native-base';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';

const SettingScreen = ({navigation}) => {
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>NewTechies</Title>
          </Body>
          <Right />
        </Header>
		<Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
			<Text>Setting Screen</Text>
		</Content>
      </Container>
    );
  }

export default SettingScreen;
