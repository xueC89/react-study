import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Content from './containers/Content';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';

const themeReducer = (state, action) =>{
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state, themeColor: action.themeColor
      }
    default:
      return state
  }
}

const store = createStore(themeReducer)

console.log(store)

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
