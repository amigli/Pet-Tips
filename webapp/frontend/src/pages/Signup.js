import {useState} from 'react'
import {useSignup} from "../hooks/useSignup";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {signup, error, isLoading} = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
        navigate("/")
    }

    const formStyle = {
        backgroundColor: '#e3f2fd',
        marginTop: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    const labelStyle = {
        fontSize: '1.2em',
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                 <div className="col-md-12" style={{ textAlign: "center" }}>
                    <h1 className="display-4" style={{ margin: "0 auto" }}>Sign up</h1>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="row g-3" style={formStyle}>
                        <div className="col-md-12">
                            {error && <div className={error} className="alert alert-danger" role="alert">{error}</div>}
                            <label htmlFor="inputEmail4" className="form-label" style={labelStyle}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                onChange={(e) => {
                                    setEmail(e.target.value)}}
                                value={email}
                            />
                        </div>
                        <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label" style={labelStyle}>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary text-center" disabled={isLoading} style={labelStyle}>Sign up</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup