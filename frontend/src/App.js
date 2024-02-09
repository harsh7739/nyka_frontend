import logo from './logo.svg';
// import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Navbar from './Routes/Navbar';
import MainRoute from './Routes/MainRoute';
import MainContainer from './component/MainContainer';
import Sidebar from './component/Sidebar';
import ProductList from './component/ProductList';
import TimerFun from './component/Timer';
import Result from './component/Result';
import PasswordStrenght from './component/PasswordStrenght';
import TimerComponent from './component/TimerComponent';

function App() {
  return (
    <div className="App">
    
     {/* <Navbar /> */}
     {/* <Sidebar /> */}
     <MainRoute />
     {/* <MainContainer /> */}
     {/* <ProductList /> */}
     {/* <TimerFun /> */}

     {/* <Result /> */}
     {/* <PasswordStrenght /> */}
     
    </div>
  );
}

export default App;
