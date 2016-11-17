import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  inputField: {
    width: Dimensions.get('window').width,
    height: 50,
    borderColor: 'gray',
    padding: 10,
    color: 'lightgray',
  }
})

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter an item!' };
  }

  render() {
    return(
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />
    )
  }
}
