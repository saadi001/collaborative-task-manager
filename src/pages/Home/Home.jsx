import React from 'react';
import task from "../../assets/task.svg"

const Home = () => {
    return (
        <section className=" text-gray-800 mx-5 sm:mx-12 lg:max-w-4xl lg:mx-auto xl:max-w-5xl">
        <div className=" container flex flex-col justify-center p-2 mx-auto sm:py-10 lg:py-20 lg:flex-row lg:justify-between">
             <div className="  flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg  xl:max-w-lg lg:text-left">
                  <h1 className="text-4xl font-bold leading-none sm:text-6xl">Manage your task at<br /><span className="text-teal-600"> Task Manager</span>
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12"> You can manage your task and team from here.
                       <br className="hidden md:inline lg:hidden" /> Here are many feature like you can see you task and team. only team member and author can see their team activities.
                  </p>
                  
             </div>
             <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src={task} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
             </div>
        </div>
   </section>
    );
};

export default Home;