import { Provider } from '@dhis2/app-runtime'

import './App.css';
import Home from './Home';

const appConfig = {
  baseUrl: 'http://localhost:3020/https://play.dhis2.org/dev',
  apiVersion: 33,
}

const App = () => (
  <Provider config={appConfig}>
    <Home></Home>
  </Provider>
)


export default App;
