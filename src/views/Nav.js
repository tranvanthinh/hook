import '../views/Nav.scss';
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/timerapp">Timer Apps</NavLink>
            <NavLink activeClassName="active" to="/todoapp">Todo Apps</NavLink>
            <NavLink activeClassName="active" to="/blog">Blog Apps</NavLink>
            <NavLink activeClassName="active" to="/covid">Covid 19</NavLink>
            <NavLink activeClassName="active" to="/youtube">Search</NavLink>
        </div>
    )
}

export default Nav