
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import {ItemDetailConteiner} from './components/ItemDetailConteiner'
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="espacioenblanco"></div>
        {/* <ItemListContainer /> */}
        <ItemDetailConteiner></ItemDetailConteiner>
      </main>
    </div>
  );
}

export default App;
