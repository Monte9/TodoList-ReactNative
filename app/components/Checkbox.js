import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const styles = StyleSheet.create({
  checkbox: {
    flex: 1,
    padding: 10,
  },
  checkboxImage: {
    height: 30,
    width: 30,
  }
})

export default class Checkbox extends Component {
  checkItem() {
    console.log("checked")
  }

  render() {
    return (
      <TouchableOpacity style={styles.checkbox} onPress={this.checkItem.bind(this)}>
        <Image
          style={styles.checkboxImage}
          source={require('../img/checked.png')}/>
      </TouchableOpacity>
    )
  }
}
