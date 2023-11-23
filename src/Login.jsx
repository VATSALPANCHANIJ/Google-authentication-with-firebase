import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { json, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';
const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [todolist, setTodolist] = useState([]);
    const submitdata = () => {
        const existingData =  JSON.parse(localStorage.getItem('userdata')) || [];
        const newData = {
            name: name,
            password: password
        };

        existingData.push(newData);

        localStorage.setItem('userdata', JSON.stringify(existingData));

        setName("");
        setPassword("");
        alert("done")
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userdata'));
        if (data) {
            setTodolist(data);
        }
    }, []);
    // Google authentication
    const handleSubmit = async () => {
        console.log("done");
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/home');

        } catch (err) {
            console.log(err);
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])
    return (
        <>
            <div>
                <div className="background">
                    <div className="shape" />
                    <div className="shape" />
                </div>
                <form>
                    <h3>Login Here</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Email or Phone" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="password" />
                    <div className="social">

                        <button type="button" onClick={submitdata}>Log In</button>
                    </div>
                    <div className="social ">

                        <button onClick={handleSubmit} type="button" className="go"><i class="bi bi-browser-chrome" style={{ color: "black" }}></i>Google</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login;