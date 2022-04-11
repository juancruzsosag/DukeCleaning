import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import { Header } from './components/Header/Header';
import { Title } from './components/Title/Title';
import { CoverPage } from './components/CoverPage/CoverPage';
import { CoverDescription } from "./components/CoverDescription/CoverDescription";
import { Services } from './components/Services/Services';
import { Form } from './components/Form/Form';
import { ServicesFrequency } from './components/ServicesFrequency/ServicesFrequency';
import { WhatsApp } from './components/WhatsApp/WhatsApp';
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <CoverPage />
      <CoverDescription />
      <Services />
      <Form />
      <ServicesFrequency />
      <WhatsApp />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
