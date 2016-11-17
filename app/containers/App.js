import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
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
    const {dispatch} = this.props

    console.log("checking item")
    console.log(index)

    dispatch(actionCreators.checkItem(index))
  }

  onDeleteItem = (index) => {
    const {dispatch} = this.props

    console.log("deleting item")
    console.log(index)

    dispatch(actionCreators.removeItem(index))
  }

  render() {
    const { items } = this.props

    return (
      <View style={styles.container}>
        <Title/>
        <Input
          placeholder="Enter a new item!"
          onSubmitEditing={this.onAddItem}/>
        <List
          items={items}
          onCheckItem={this.onCheckItem}
          onDeleteItem={this.onDeleteItem}/>
        <Footer/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
