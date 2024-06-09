import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext";

// pages & component
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin"
import Navbar from "./components/Navbar"

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
                path="/"
                element={<Home/>}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/"/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/"/>}
            />
            <Route
              path="/admin"
              element={user && user.user.role ? <Admin/> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
