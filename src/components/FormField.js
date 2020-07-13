import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';

class FormField extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: 'Login Failed',
    };
  }

  componentDidMount() {
  }

  onButtonPress = () => {
	  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).
	  then(this.onSuccess);
  }

  onSuccess = () => {

  }

  render() {
	  const {name} = this.props;
    return (
      <View style={styles.emailAndpassword}>
        <TextInput
          placeholder="Username/Email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

		<TextInput
          placeholder="Password"
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
        />
		
        <TouchableOpacity onPress={() => {this.onButtonPress}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailAndpassword: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderColor: '#2f4f4f',
    borderWidth: 2,
    borderRadius: 25,
    width: 300,
    paddingHorizontal: 20,
    marginVertical: 10,
    height: 40,
    paddingLeft: 10,
    marginBottom: 15,
	  fontSize: 15,
  },
  buttonText: {
    marginVertical: 20,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default FormField;
