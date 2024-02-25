
import './App.css';
import Title from './components/Title';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom'

function App() {

let myName = "Su"

  return (
  <div>
    <Navigation />
    <Title myName={myName}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </div>
  );
}

export default App;
