import {Link, useNavigate} from 'react-router-dom'
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const navStyle = {
        backgroundColor: '#DFD0B8'
    }

    const linkStyle = {
        fontSize: '1.5em',
    }

    const brandStyle = {
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        display: 'flex'
    }

    const brandStyleh1 = {
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        display: 'flex',
        marginLeft: 8,
    }

    console.log(user)

    const handleClick = () => {
        logout()
        navigate("/")
    }

    return (
    <nav className="navbar navbar-expand-lg" style={navStyle}>
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/" style={brandStyle}>
            <span className="material-symbols-outlined icon" style={linkStyle}>pets</span>
          <h1 className="brand-text" style={brandStyleh1}>PetTips</h1>
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
        <div className="d-flex">
          {user && (
              <Link className="btn btn-light me-2 btn-lg" onClick={handleClick}>
                Logout
              </Link>
          )}
          {user && user.user && user.user.role === "admin" && (
              <Link className="btn btn-light btn-lg" to="/admin">
                Admin Page
              </Link>
          )}
        </div>
          {!user && (
            <div className="d-flex">
              <Link className="btn btn-light me-2 btn-lg" to="/login">
                Login
              </Link>
              <Link className="btn btn-light btn-lg" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );

}

export default Navbar