import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import IndexPageComponent from './components/IndexPageComponent';
import ResumeComponent from './components/ResumeComponent';

function App() {
  

  return (
    <div>
      <Router>
          <HeaderComponent />
            <div>
              <Switch>
                <Route path = "/" exact component={IndexPageComponent}></Route>
                <Route path = "/resume" component = {ResumeComponent}></Route>
                <Route path = "/services" exact component = {ListProductComponent}></Route>
                <Route path = "/services/view-product/:id" component = {ViewProductComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
