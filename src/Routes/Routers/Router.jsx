import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import CreateTask from "../../pages/CreateTask";
import NotFound from "../../pages/NotFound";
import YourTask from "../../pages/YourTask";
import CreateTeam from "../../pages/CreateTeam";
import Teams from "../../pages/Teams";

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
            element: <CreateTask></CreateTask>
        },
        {
            path: "/yourTask",
            element: <YourTask></YourTask>
        },
        {
          path: "/createTeam",
          element: <CreateTeam></CreateTeam>
        },
        {
          path: "/teams",
          element: <Teams></Teams>
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
