import React from 'react';
import './App.css';
import Routes from './routes';

/**
 * Quando a classe não tem state ela pode ser escrita 
 * em formato de função
 */

const App = () => <Routes />;


/*
class App extends Component {
  render() {
    return <Main />;
  }
} 
*/
export default App;
