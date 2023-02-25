import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Menu from './components/Menu';
// import About from './components/About';
// import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;