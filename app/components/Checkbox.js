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

  displayCheckbox() {
    console.log(this.props)
    if(this.props.checked) {
      return (
        <Image
          style={styles.checkboxImage}
          source={require('../img/checked.png')}/>
      )
    } else {
      return (
        <Image
          style={styles.checkboxImage}
          source={require('../img/unchecked.png')}/>
      )
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.checkbox} onPress={this.checkItem.bind(this)}>
        {this.displayCheckbox()}
      </TouchableOpacity>
    )
  }
}
