import React from 'react';
import './App.css';
import Counter from './Components/counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    )
  }
}

export default App;
