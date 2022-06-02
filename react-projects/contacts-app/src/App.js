
import './App.css';
import Contacts from "./components/Contact";
import Edit from "./components/Contact/Edit";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div id="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Contacts} />
                    <Route path="/edit/:id" component={Edit} />
                </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
