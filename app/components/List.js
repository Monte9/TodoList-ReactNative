import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Input from './Input'
import Item from './Item'

const styles = StyleSheet.create({
  listView: {
    position: 'absolute',
    top: 50,
    left: 0,
    flexDirection: 'row',
  },
})

export default class List extends Component {
  render() {
    return(
      <ScrollView style={styles.listView}>
        <Input/>
        <Item item="Todo Item 1"/>
      </ScrollView>
    )
  }
}
