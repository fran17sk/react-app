import './App.css';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import {CartContextProvider}  from './context/cartContext';
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <div className="espacioenblanco carou"></div>
          <Main/>
          <Footer/>
        </CartContextProvider>
      </BrowserRouter> 
    </>
  );
}

export default App;
