import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";


function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}  />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
