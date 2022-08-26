
import './App.css';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import {CartContextProvaider} from './context/cartContext'
import Main from './components/Main';
function App() {
  return (
    <>
        <BrowserRouter>
          <CartContextProvaider>
            <Navbar />
            <div className="espacioenblanco"></div>
            <Main/>
            <Footer/>
          </CartContextProvaider>
        </BrowserRouter> 
    </>
  );
}

export default App;
