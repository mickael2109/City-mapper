import { Link } from "react-router-dom";

const IndexTaxi = () => {

    return (
        <div>
            <ul>
                <li><Link to="/taxi/client">Client</Link></li>
                <li><Link to="/taxi/chauffeur">Chauffeur</Link></li>
            </ul>
        </div>
    );
};


export default IndexTaxi;