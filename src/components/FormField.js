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
	console.log('componentDidMount from FormFiel');
  }

  onButtonPress = () => {
	  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).
	  then(this.onSuccess);
  }

  onSuccess = () => {

  }

  render() {
	  const {name} = this.props;
	  console.log('props', this.props);
	  console.log('name', name);
    return (
      <View style={styles.emailAndpassword}>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

		<TextInput
          placeholder="password"
          style={styles.input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
		
        <TouchableOpacity onPress={() => {this.onButtonPress}}>
          <Text>Login</Text>
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
    height: 40,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
	fontSize: 15,
  },
});

export default FormField;
