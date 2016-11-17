import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 5,
    padding: 10,
  },
  checkbox: {
    flex: 1,
  }
})

export default class Item extends Component {
  render() {
    return(
      <View style={styles.itemView}>
        <Text style={styles.item}>{this.props.item}</Text>
        <Checkbox style={styles.checkbox}/>
      </View>
    )
  }
}
