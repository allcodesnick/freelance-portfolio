import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProvidedServicesComponent from './components/ListProvidedServicesComponent';
import CreateProvidesServicesComponent from './components/CreateProvidesServicesComponent';
import ListProductComponent from './components/ListProductComponent';

function App() {

  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListProductComponent}></Route>
                <Route path = "/services" component = {ListProvidedServicesComponent}></Route>
                <Route path = "/add-service" component = {CreateProvidesServicesComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
