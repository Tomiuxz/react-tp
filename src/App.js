import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/NavbarComp.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings="Prop" />
      <header>
      </header>
    </div>
  );
}

export default App;
