import './App.css';
import './About.css';
import './login.css';
import Header from './component/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/home';
import './Contact.css';
import {Route} from 'react-router-dom';
import Footer from './component/Footer';
import Login from './Loginout/Login';
import Signup from './Loginout/Signup';



function App() {
  return (
    <div className="App">
      
     <Header />
      <Route  path="/home" component = {Home}/>
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact}/>
      
      <Route  exact path="/" component={Login}/>

      <Route path="/signup" component={Signup} />

      <Footer />
      
      
      
      
    </div>
  );
}

export default App;
