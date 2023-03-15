import './App.css';
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import {Units} from './components/Units'
import {About} from './components/About'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route exact path = '/' element={<Units/>}></Route>
        <Route path = '/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
