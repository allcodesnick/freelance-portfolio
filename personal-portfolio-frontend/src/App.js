import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import IndexPageComponent from './components/IndexPageComponent';

function App() {
  

  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component={IndexPageComponent}></Route>
                <Route path = "/services" exact component = {ListProductComponent}></Route>
                <Route path = "/services/view-product/:id" component = {ViewProductComponent}></Route>
                <Route path = "/services/add-product/:id" component = {CreateProductComponent}></Route>
                <Route path = "/services/update-product/:id" component = {UpdateProductComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
