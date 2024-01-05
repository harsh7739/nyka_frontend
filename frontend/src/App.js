import logo from './logo.svg';
// import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Navbar from './Routes/Navbar';
import MainRoute from './Routes/MainRoute';
import MainContainer from './component/MainContainer';
import Sidebar from './component/Sidebar';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="App">
    
     {/* <Navbar /> */}
     <MainRoute />
     <Sidebar />
     {/* <MainContainer /> */}
     {/* <ProductList /> */}
    </div>
  );
}

export default App;
