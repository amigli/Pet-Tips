import {useState} from 'react'
import {useLogin} from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                 <div className="col-md-12" style={{ textAlign: "center" }}>
                    <h1 className="display-4 formtitlelog">Login</h1>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="row g-3 formstyle" id="formstyle_log">
                        <div className="col-md-12">
                            {error && <div className="alert alert-danger error" role="alert">{error}</div>}
                            <label htmlFor="inputEmail4" className="form-label labelstyle">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                onChange={(e)=>{setEmail(e.target.value)}}
                                value={email}
                            />
                        </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label labelstyle">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-light btn-lg" disabled={isLoading} style={{marginTop: '1%'}}>Login</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login