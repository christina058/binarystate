import './style.css';
import {Link} from "react-router-dom";

const Details = () => {
    return (
    <div className="wrap"> 
        <p>
            Detailseite
        </p>
        <Link to="/">Zurück</Link>   
    </div>
    );
};

export default Details;
