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
import NotFound from "./pages/NotFound";

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
              element={<Login/>}
            />
            <Route
              path="/signup"
              element={<Signup/>}
            />
            <Route
              path="/admin"
              element={<Admin/>}
            />
            <Route
              path="/update-cat"
              element={<CatUpdate/>}
            />
            <Route
              path="/update-dog"
              element={<DogUpdate/>}
            />
            <Route
              path="/dogFullDetails"
              element={<DogFullDetails/>}
            />
            <Route
              path="/catFullDetails"
              element={<CatFullDetails/>}
            />
            <Route
                path="*"
                element={<NotFound/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;