import React, { Component } from 'react'
import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { nameContext } from './contexts/nameContext';


export class App extends Component {

  constructor(props){
    super(props)

    this.state = {
        user:{name: ''}
    }
  }

  newName = (name) => {
    this.setState({
      user:{name : name}
    })
  }
 
  render() {

    const user = {
      name: this.state.user.name,
      newName: this.newName
    }

    return (
      <div className="App">
      <BrowserRouter>
        <nameContext.Provider value={user}>
          <Header />
          <Main />
          <Footer />
        </nameContext.Provider>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
