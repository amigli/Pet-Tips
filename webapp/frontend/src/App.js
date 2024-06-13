import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext";

// pages & component
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin"
import Navbar from "./components/Navbar"
import CatUpdate from "./pages/CatUpdate";
import DogUpdate from "./pages/DogUpdate";
import Footer from "./components/Footer";
import DogFullDetails from "./pages/DogFullDetails";
import CatFullDetails from "./pages/CatFullDetails";

function App() {

  const { user } = useAuthContext()

  console.log(user)

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
              element={!user ? <Login/> : (user && user.user && user.user.role === "admin") ? <Admin/> : <Home/>}
            />
            <Route
              path="/update-cat"
              element={!user ? <Login/> : (user && user.user && user.user.role === "admin") ? <CatUpdate/> : <Home/>}
            />
            <Route
              path="/update-dog"
              element={!user ? <Login/> : (user && user.user && user.user.role === "admin") ? <DogUpdate/> : <Home/>}
            />
            <Route
              path="/dogFullDetails"
              element={<DogFullDetails/>}
            />
            <Route
              path="/catFullDetails"
              element={<CatFullDetails/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;