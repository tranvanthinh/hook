import { useParams, useHistory } from "react-router-dom";
const NotFound = () => {

    let history = useHistory();
    const handleReturn = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h4>404 Not Found</h4>
            <h5>This site cant be reached</h5>
            <button className="btn btn-primary" onClick={() => handleReturn()}>Return</button>
        </div>
    )
}

export default NotFound;