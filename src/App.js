
import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import {ItemDetailConteiner} from './components/ItemDetailConteiner'
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {Route , Routes , BrowserRouter} from 'react-router-dom'




function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Navbar />
          <div className="espacioenblanco"></div>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:category' element={<ItemListContainer/>}></Route>
            <Route path='/product/:cod' element={<ItemDetailConteiner/>}></Route>

          </Routes>
        </BrowserRouter> 
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
