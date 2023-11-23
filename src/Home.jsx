import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {

        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])
    return (
        <div>

            <h2 style={{ color: "white" }}>{user && user.email}</h2>
            {user && (<img src={user.photoURL} />)}

            <div className="fiv">
                <button type="button" className="go" style={{ width: "" }} onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}
export default Home;