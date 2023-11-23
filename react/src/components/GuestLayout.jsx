import { Outlet , Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";


export default function GuestLayout() {
    const { token } = useStateContext();
    console.log("GuestLayout", token);
    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}
