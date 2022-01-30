import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';

function App() {

  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListProductComponent}></Route>
                
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
