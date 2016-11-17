import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  footerBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 50,
    borderWidth: 1,
  },
  detailText: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    color: 'red',
    fontSize: 16,
  }
})

export default class Footer extends Component {
  removeItems() {
    console.log("Remove items here")
  }

  render() {
    return (
      <TouchableOpacity style={styles.footerBar} onPress={this.removeItems.bind(this)}>
        <Text style={styles.detailText}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
