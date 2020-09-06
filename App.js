import React , {Component} from 'react'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Routes from './src/Routes';


class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

export default App