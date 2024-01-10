import "../App.css";
import {NavLink} from "react-router-dom";


export default function Navbar () {
    return <nav className="nav">
        <ul className="Navbar">
            <li>
                <NavLink 
                    style={({ isActive }) => ({textDecoration: 'none', color: isActive ? 'blue' : 'grey', borderBottom: isActive ? '2px solid blue' : 'none', paddingBottom: '13px'})}
                    to='/'>LeaderBoard
                </NavLink>
            </li>
            <li>
                <NavLink 
                    style={({ isActive }) => ({textDecoration: 'none', color: isActive ? 'blue' : 'grey', borderBottom: isActive ? '2px solid blue' : 'none', paddingBottom: '13px',})} 
                    to='/Limit'>Settings
                </NavLink>
            </li>
        </ul>
        <hr style={{margin: '0 15px 15px'}}/>
    </nav>
}