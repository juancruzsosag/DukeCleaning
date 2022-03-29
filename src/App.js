import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import {Form} from './components/Form/Form';
import {Services} from './components/Services/Services';
import {ServicesFrequency} from './components/ServicesFrequency/ServicesFrequency';
import {WhatsApp} from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <div className="App">
      <Services />
      <Form />
      <ServicesFrequency /> 
      <WhatsApp />
    </div>
  );
}

export default App;
