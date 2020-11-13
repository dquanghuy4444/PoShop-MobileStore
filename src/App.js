import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Phone from './pages/Phone';
import NavbarComp from './components/NavbarComp';
import { Container } from 'reactstrap';
import FooterComp from './components/FooterComp';
import ButtonScrollToTopComp from './components/ButtonScrollToTopComp';

function App() {
  return (
    <>
      <Router>
        <NavbarComp></NavbarComp>

        <Container fluid={true}>
          <Switch>
            <Route path="/" component={ Home } exact></Route>
            <Route path="/phone" component={ Phone }></Route>
          </Switch>
        </Container>

        <ButtonScrollToTopComp></ButtonScrollToTopComp>

        <FooterComp></FooterComp>

      </Router>
    </>
  );
}

export default App;
