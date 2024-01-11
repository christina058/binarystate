import './style.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="wrap">
        <h1>
          Probeaufgabe Binarystate
        </h1>
        <h2>Christina Albert</h2>
        <Link to="/details">Mehr</Link>
    </div>
  );
}

export default App;
