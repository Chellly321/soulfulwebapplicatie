import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursus from "./pages/Cursus";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import ScrollToTop from "./helper/scrollToTop";
import CourseDetail from "./pages/CourseDetail";
import PageNotFound from "./pages/404";



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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/course/:id" component={CourseDetail} />

            <Route component={PageNotFound} />
        </Switch>
        <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
