import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import IndexComponent from './components/IndexComponent';

function App() {

  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListProductComponent}></Route>
                <Route path = "/index" exact component={IndexComponent}></Route>
                <Route path = "/view-products/:id" component = {ViewProductComponent}></Route>
                <Route path = "/add-products/:id" component = {CreateProductComponent}></Route>
                <Route path = "/update-products/:id" component = {UpdateProductComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
