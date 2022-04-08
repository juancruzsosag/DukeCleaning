import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import {Form} from './components/Form/Form';
import {Services} from './components/Services/Services';
import {ServicesFrequency} from './components/ServicesFrequency/ServicesFrequency';
import {WhatsApp} from './components/WhatsApp/WhatsApp';
import {Header} from './components/Header/Header'
import {CoverPage} from './components/CoverPage/CoverPage'
import {CoverDescription} from "./components/CoverDescription/CoverDescription"
import {Footer} from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <CoverPage />
      <CoverDescription />
      <Services />
      <Form />
      <ServicesFrequency /> 
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default App;
