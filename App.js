import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic  = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <Text style={{flex: 1,padding: 20,backgroundColor: 'powderblue', textAlignVertical: 'bottom'}}>
          Paragraph Template Here
        </Text>
        <TextInput
          style={{padding: 20, flex: 2, height: 40,textAlignVertical: 'top'}}
          multiline={true}
          placeholder="Type here!"
          onChangeText={(text) => this.setState({text})}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject',() => App)