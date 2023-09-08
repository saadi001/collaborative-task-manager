import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='w-full flex justify-between items-center px-5 py-3 shadow-md'>
                <div className='text-2xl font-sans'><Link to={"/"}>Task Management</Link></div>
                <div >
                    <ul className='flex gap-x-5'>
                    <li><Link to={'/createTask'}>Create Task</Link></li>
                    <li><Link to={"/yourTask"}>Your Tasks</Link></li>
                    <li><Link to={"/createTeam"}>Create Team</Link></li>
                    <li><Link to={"/teams"}>Teams</Link></li>
                    <li>Dashboard</li>
                    </ul>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;