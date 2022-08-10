
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="espacioenblanco"></div>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
