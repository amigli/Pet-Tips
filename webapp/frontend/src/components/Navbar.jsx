import {Link, useNavigate} from 'react-router-dom'
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const navStyle = {
        backgroundColor: '#e3f2fd'
    }

    const linkStyle = {
        fontSize: '1.5em',
    }

    const brandStyle = {
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        display: 'flex'
    }

    console.log(user)

    const handleClick = () => {
        logout()
        navigate("/")
    }

    return (
    <nav className="navbar navbar-expand-lg" style={navStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={brandStyle}>
            <span className="material-symbols-outlined icon" style={linkStyle}>pets</span>
          <h1 className="brand-text" style={{marginLeft: 8}}>PetTips</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          {user && (
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-danger" onClick={handleClick}>
                Logout
              </button>
            </div>
          )}
          {!user && (
            <div className="d-flex">
              <Link className="btn btn-outline-primary me-2" to="/login" style={linkStyle}>
                Login
              </Link>
              <Link className="btn btn-outline-secondary" to="/signup" style={linkStyle}>
                Signup
              </Link>
            </div>
          )}
          {user && user.user.role === "admin" && (
            <div className="d-flex">
              <Link className="btn btn-outline-warning ms-2" to="/admin">
                Admin Page
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );

}

export default Navbar