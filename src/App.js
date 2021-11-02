import './App.css';
import {Route} from "react-router";
import {Link} from "react-router-dom";
import Spa from "./page/Spa";
import Question from "./page/Question";

function App() {
  return (
    <div className="App">
        <div className="Nav">
            <Link to="/question">TestQuestion</Link>
            <Link to="/spa">SPA</Link>
        </div>

      <Route exact path="/question" component={Question}/>
      <Route  path="/spa" component={Spa} />
    </div>
  );
}

export default App;
