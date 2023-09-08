import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import CreateTask from "../../pages/CreateTask";
import NotFound from "../../pages/NotFound";
import YourTask from "../../pages/YourTask";
import CreateTeam from "../../pages/CreateTeam";
import Teams from "../../pages/Teams";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/createTask",
            element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
        },
        {
            path: "/yourTask",
            element: <PrivateRoute><YourTask></YourTask></PrivateRoute>
        },
        {
          path: "/createTeam",
          element: <PrivateRoute><CreateTeam></CreateTeam></PrivateRoute>
        },
        {
          path: "/teams",
          element: <PrivateRoute><Teams></Teams></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);
