import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursus from "./pages/Cursus";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cursus" component={Cursus} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/account" component={Account} />


        </Switch>
    </BrowserRouter>
  );
}

export default App;
