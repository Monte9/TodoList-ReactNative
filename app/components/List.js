import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Input from './Input'
import Item from './Item'

const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
})

export default class List extends Component {
  render() {
    return(
      <ScrollView style={styles.listView}>
        <Input/>
        <Item item="Todo Item 1" checked={true}/>
        <Item item="Todo Item 2" checked={true}/>
        <Item item="Todo Item 3" checked={false}/>
        <Item item="Todo Item 4" checked={false}/>
        <Item item="Todo Item 5" checked={true}/>
        <Item item="Todo Item 6" checked={false}/>
        <Item item="Todo Item 1" checked={true}/>
        <Item item="Todo Item 2" checked={true}/>
        <Item item="Todo Item 3" checked={false}/>
        <Item item="Todo Item 4" checked={false}/>
        <Item item="Todo Item 5" checked={true}/>
        <Item item="Todo Item 6" checked={false}/>
        <Item item="Todo Item 1" checked={true}/>
        <Item item="Todo Item 2" checked={true}/>
        <Item item="Todo Item 3" checked={false}/>
        <Item item="Todo Item 4" checked={false}/>
        <Item item="Todo Item 5" checked={true}/>
        <Item item="Todo Item 6" checked={false}/>
      </ScrollView>
    )
  }
}
