import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Phone from './pages/Phone';
import NavbarComp from './containers/NavbarComp';
import { Container } from 'reactstrap';
import FooterComp from './containers/FooterComp';
import ScrollToTopButtonComp from './components/Buttons/ScrollToTopButtonComp';

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

        <FooterComp></FooterComp>
      </Router>
      
      <ScrollToTopButtonComp></ScrollToTopButtonComp>
    </>
  );
}

export default App;
