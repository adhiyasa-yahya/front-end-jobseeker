import { useState } from "react"
import axios from 'axios';

function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const onLogin = (e) => {
        e.preventDefault()
        const user = {
            email: name,
            password: pass
        };
        console.log(user)

        axios.post(`http://localhost:8000/login`, { user })
        .then(res => {
            if (res.data) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.token)
                );
            }
        })
    }

    return (
        <div className="mx-auto py-4 mt-5 border border-1 border-secondary rounded p-3 w-50">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                       aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
            </ul>

            <div className="tab-content ">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={onLogin}>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" onChange={(e) => setName(e.target.value)}/>
                            <label className="form-label" >Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control"  onChange={(e) => setPass(e.target.value)}/>
                            <label className="form-label">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 mx-auto">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
