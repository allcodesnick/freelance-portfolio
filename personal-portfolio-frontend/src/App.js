import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProvidedServicesComponent from './components/ListProvidedServicesComponent';

function App() {
  return (
    <div>

      <HeaderComponent />
      <div className="container">
        <ListProvidedServicesComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
