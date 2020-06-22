import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import LoginScreen from './components/LoginScreen';
import App from './App';

class Session extends React.Component{
	constructor() {
		super();
		this.state = {
		  isLogin: true,
		};
	  }
	
	  componentDidMount() {
		console.log('componentDidMount from HomeScreen');
		var firebaseConfig = {
		  apiKey: 'AIzaSyBmiuErzygLsiPrjqAo0sSJJ8ghzyu1uhs',
		  authDomain: 'bproject-5daee.firebaseapp.com',
		  databaseURL: 'https://bproject-5daee.firebaseio.com',
		  projectId: 'bproject-5daee',
		  storageBucket: 'bproject-5daee.appspot.com',
		  messagingSenderId: '85335617473',
		  appId: '1:85335617473:web:b347c0c40c4da2dbed4940',
		  measurementId: 'G-4W46S132D2',
		};
		// Initialize Firebase
		if (!firebase.apps.length) {
		  firebase.initializeApp({firebaseConfig});
		}
		// firebase.auth().onAuthStateChanged(function(user) {
		//   if (user) {
		//     this.setState({isLogin: true});
		//   } else {
		//     this.setState({isLogin: false});
		//   }
		// });
	  }
	
	  renderPage = () => {
		const {isLogin} = this.state;
		switch (isLogin) {
		  case false:
			return <LoginScreen login={isLogin} />;
		  case true:
			return <App />;
		}
	  };
	
	  render() {
		return <View style={styles.container}>{this.renderPage()}</View>;
	  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	},
  });

export default Session;
