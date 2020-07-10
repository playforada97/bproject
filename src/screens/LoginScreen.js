import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import FormField from '../components/FormField';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{uri: 'https://uilogos.co/img/logotype/circle.png'}}
          style={{width: 150, height: 150}}
        />
      </View>

	  <FormField name={'raghu'} lastName="K"/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  emailAndpassword: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
	  height: 40,
	  paddingLeft: 10,
	  marginBottom: 15,
	  borderRadius:5,
	  fontSize:15
  }
});

export default LoginScreen;
