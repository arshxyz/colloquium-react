import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
        </a>

        <ul id="nav" className="nav">

        <li style={{float: 'left', fontSize: '1.5rem', textTransform: 'capitalize'}}>
        <Link to="/">DebSoc<span style={{color: '#c3152c'}}>.</span></Link>
        </li>

        <li>
        <Link to="/">Home</Link>
        </li>

        {/* <li>
        <Link to="/ourteam">Our Team</Link>
        </li> */}
        <li>
        <Link to="/about">About Us</Link>
        </li>
        <li>
        <Link to="/pd">PD</Link>
        </li>
        <li>
        <Link to="/mun">MUN</Link>
        </li>
        <li>
        <Link to="/colloquium">Colloquium</Link>
        </li>
        </ul>
    </nav>
    )

}