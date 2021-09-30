
import { useState } from "react";
import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
import { nameContext } from './contexts/nameContext'

function App() {

  const [name, setName] = useState("");

  const user = {
    name: name,
    setName: setName
  }

  return (
    <div className="App">
      <nameContext.Provider value={user}>
        <BrowserRouter>
        <Header />
          <Main />
        <Footer />
        </BrowserRouter>
      </nameContext.Provider>
    </div>
  );
}

export default App;
