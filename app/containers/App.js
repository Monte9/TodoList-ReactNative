import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.addItem(text))
  }

  onCheckItem = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.checkItem(index))
  }

  onDeleteItem = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.removeItem(index))
  }

  onRemoveItems = () => {
    const { dispatch } = this.props
    dispatch(actionCreators.removeAllItems())
  }

  render() {
    const { items } = this.props

    return (
      <View style={styles.container}>
        <Header title="Todo List"/>
        <Input
          placeholder="Enter a new item!"
          onSubmitEditing={this.onAddItem}/>
        <List
          items={items}
          onCheckItem={this.onCheckItem}
          onDeleteItem={this.onDeleteItem}/>
        <Footer title="Remove completed items" onRemoveItems={this.onRemoveItems}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
