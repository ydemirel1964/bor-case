import { createBrowserRouter } from "react-router-dom";
import Vehicles from "./views/Vehicles";
import Employees from "./views/Employees";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import VehicleForm from "./views/VehicleForm";
import EmployeeForm from "./views/EmployeeForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/vehicles",
                element: <Vehicles />,
            },
            {
                path: "/vehicles/new",
                element: <VehicleForm key="vehicleCreate" />,
            },
            {
                path: "/vehicles/:id",
                element: <VehicleForm key="vehicleUpdate" />,
            },
            {
                path: "/employees",
                element: <Employees key="employeeCreate" />,
            },
            {
                path: "/employees/:id",
                element: <EmployeeForm key="employeeUpdate" />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
