import './App.css';
import {BrowserRouter as Router,Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProvidedServicesComponent from './components/ListProvidedServicesComponent';

function App() {



  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" component = {ListProvidedServicesComponent}></Route>
                <Route path = "/services" component = {ListProvidedServicesComponent}></Route>
                <ListProvidedServicesComponent />
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
