import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  footerBar: {
    width: Dimensions.get('window').width,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white'
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
  render() {
    const { title, onRemoveItems } = this.props
    return (
      <TouchableOpacity style={styles.footerBar} onPress={onRemoveItems} activeOpacity={1}>
        <Text style={styles.detailText}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
