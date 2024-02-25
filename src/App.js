//this app.js is like my control panel and includes most if not all of my coding, routes to my pages, 


//intalling bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//importing components:
import Title from './components/Title';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
//installing react router dom
import {Routes, Route} from 'react-router-dom'

//importing app.css
import "./App.css";


















function App() {
//below is a string to use/pass through title component (using js inside html)
let myYear = "2024"




// below is calling/running the navigation component  <Navigation />
// below is calling/running the title component <Title myYear={myYear}/>
//below are routes to components: HomePage, About 
  return (
//NEED ADD START CONTAINER HERE?
//NEED TO CHANGE DIV TO CARD

  <div>
    <Navigation />
  
    <Title myYear={myYear}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </div>
 //NEED TO ADD END CONTAINER HERE?
  );
}

export default App;
