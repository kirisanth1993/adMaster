import './App.css';
import Layout from './components/Layout/Layout';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/adMaster" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
