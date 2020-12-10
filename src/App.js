import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Home from './pages/Home';
import Phone from './pages/Phone';
import NavbarComp from './containers/NavbarComp';
import { Container } from 'reactstrap';
import FooterComp from './containers/FooterComp';
import ScrollToTopButtonComp from './components/Buttons/ScrollToTopButtonComp';
import Product from './pages/Product';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="main">
      <Router>
        <NavbarComp></NavbarComp>

        <Container fluid={true}>
          <Switch>
            <Route path="/" component={ Home } exact></Route>
            <Route path="/phone" component={ Phone } exact></Route>
            <Route path="/phone/:id" component={ Product }></Route>
          </Switch>
        </Container>

        <FooterComp></FooterComp>
      </Router>
      
      <ScrollToTopButtonComp></ScrollToTopButtonComp>
    </div>
  );
}

export default App;
