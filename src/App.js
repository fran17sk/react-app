import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import ItemListContent from './components/ItemListContent';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemListContent/>
      </main>
    </div>
  );
}

export default App;
