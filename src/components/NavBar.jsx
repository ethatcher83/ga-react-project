import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
            <ul>
              <li>
                <Link to='/'>Search Recipe</Link>
              </li>
              <li>
                <Link to='/shopping-list'>Shopping List</Link>
              </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;