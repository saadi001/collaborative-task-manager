import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import menu from "../assets/menu.png";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const MainLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const userLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center px-5 py-5 shadow-md">
        <div className="text-base sm:text-2xl font-sans flex item gap-2">
          <Menu
            menuButton={
              <MenuButton>
                <img className="w-4 sm:hidden" src={menu} alt="" />
              </MenuButton>
            }
            transition
          >
            <MenuItem><Link to={"/createTask"}>Create Task</Link></MenuItem>
            <MenuItem> <Link to={"/yourTask"}>Your Tasks</Link></MenuItem>
            <MenuItem><Link to={"/createTeam"}>Create Team</Link></MenuItem>
            <MenuItem><Link to={"/teams"}>Teams</Link></MenuItem>
            <MenuItem><Link to={"/dashboard"}>Dashboard</Link></MenuItem>
            <MenuItem>{user ? (
              <li>
                <button onClick={() => userLogOut()}>Log out</button>
              </li>
            ) : (
              <li>
                <Link to={"/login"}>Log in</Link>
              </li>
            )}</MenuItem>
          </Menu>
          <Link to={"/"} className="font-serif">Task Manager</Link>
        </div>
        <div className="hidden sm:inline-block">
          <ul className="flex gap-x-5">
            <li>
              <Link to={"/createTask"}>Create Task</Link>
            </li>
            <li>
              <Link to={"/yourTask"}>Your Tasks</Link>
            </li>
            <li>
              <Link to={"/createTeam"}>Create Team</Link>
            </li>
            <li>
              <Link to={"/teams"}>Teams</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            {user ? (
              <li>
                <button onClick={() => userLogOut()}>Log out</button>
              </li>
            ) : (
              <li>
                <Link to={"/login"}>Log in</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
