
import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/Home/Home';
import Questions from './Component/Questions/Questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NextStep from './Component/NextStep/NextStep';
import Record from './Component/Record/Record';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>

        <Route path="/question">
          <Questions></Questions>
        </Route>
        <Route path="/next">
          <NextStep></NextStep>
        </Route>
        <Route path="/record">
          <Record></Record>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
