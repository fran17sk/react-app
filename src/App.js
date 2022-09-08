import './App.css';
import "animate.css/animate.min.css";
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import {CartContextProvider}  from './context/cartContext';
import Main from './components/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './components/Firebase'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <div className="espacioenblanco carou"></div>
          <Main/>
          <Footer/>
          <ToastContainer/>
        </CartContextProvider>
      </BrowserRouter> 
    </>
  );
}

export default App;
