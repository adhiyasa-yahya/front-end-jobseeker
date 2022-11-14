import { Outlet } from "react-router-dom";
import Login from "../view/auth/Login";

const useAuth = () => {
    const user  = JSON.parse(localStorage.getItem("user"));

    return user;
};

function ProtectedRoutes() {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
