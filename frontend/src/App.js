import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Success from './pages/success/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turfs"  element={<List />}/> 
        <Route path="/success" element={<Success/>}/> 

        </Routes>
    </BrowserRouter>
  );
}

export default App;
