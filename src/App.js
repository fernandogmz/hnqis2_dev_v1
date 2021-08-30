import "./App.css";

// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import ProgramDetails from "./components/PRG_Details/ProgramDetails";
import ProgramList from "./components/PRG_List/ProgramList";

const appConfig = {
  baseUrl: "http://localhost:3020/https://play.dhis2.org/dev",
  apiVersion: 33,
};

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ProgramList}/>
        <Route path='/program' component={ProgramDetails}/>
      </Switch>
    </BrowserRouter>
  );
};

/**
 *  <Navbar/>
    <Container/>
 */

export default App;
