const types = {
  ADD_ITEM: 'ADD_ITEM',
  CHECK_ITEM: 'CHECK_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ALL_ITEMS: 'REMOVE_ALL_ITEMS'
}

export const actionCreators = {
  addItem: (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item
    }
  },
  checkItem: (index) => {
    return {
      type: types.CHECK_ITEM,
      payload: index
    }
  },
  removeItem: (index) => {
    return {
      type: types.REMOVE_ITEM,
      payload: index
    }
  },
  removeAllItems: () => {
    return {
      type: types.REMOVE_ALL_ITEMS,
    }
  },
}

const initialState = {
  items: [
    {label: "Default item 1", completed: false},
    {label: "Go get groceries", completed: true},
    {label: "Watch a movie", completed: true},
  ],
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const { items } = state

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{label: payload, completed: false}, ...items],
      }
    }
    case types.CHECK_ITEM: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload) {
            return item = {label: item.label, completed: !item.completed}
          } else {
            return item
          }
        }),
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, i) => i !== payload),
      }
    }
    case types.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        items: items.filter((item) => !item.completed)
      }
    }
    default: {
      return state
    }
  }
}
