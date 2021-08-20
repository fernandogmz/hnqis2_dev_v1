import './App.css';
import Navbar from './Navbar/Navbar';
import Container from './Container';

const appConfig = {
  baseUrl: 'http://localhost:3020/https://play.dhis2.org/dev',
  apiVersion: 33,
};

const App = () => {
  return (
    <>
    <Navbar/>
    <Container/>
    </>
  );
}

export default App;
