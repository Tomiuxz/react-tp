import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/NavbarComp.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCounter from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings="Prop"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
