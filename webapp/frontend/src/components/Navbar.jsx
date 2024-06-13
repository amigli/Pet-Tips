import {Link, useNavigate} from 'react-router-dom'
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate("/")
    }

    return (
    <nav className="navbar navbar-expand-lg background">
      <div className="container-fluid container">
        <Link className="navbar-brand brandstyle" to="/">
            <span className="material-symbols-outlined icon" id="spanstyle">pets</span>
            <h1 className="brand-text brandstyle" id="pettips">PetTips</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        <div className="d-flex">
          {user && user.user && (
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