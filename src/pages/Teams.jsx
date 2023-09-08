import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import AddTaskModal from './Modal/AddTaskModal.jsx/AddTaskModal';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Teams = () => {
    const [teamInfo, setTeamInfo] = useState(null)
    const {user} = useContext(AuthContext)
    const {data:teams = [], isLoading, refetch } = useQuery({
        queryKey : ["teams"],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/teamsOnly/${user.email}`)
            const data = await res.json()
            console.log(data);
            return data;
        }    
    })

    const handleModal = (team) => {
        document.getElementById('addTaskModal').showModal();
        setTeamInfo(team)
    }

    return (
        <div className='mx-5 sm:mx-12 lg:max-w-4xl lg:mx-auto xl:max-w-5xl  pt-5'>
               <p className='text-lg font-semibold text-slate-800 mb-3'>Teams <span className='text-sm font-normal'>(you can see the teams where you are member or author)</span></p>                         
                {teams.map((team, i) => <div key={team._id} className='overflow-x-auto rounded border border-gray-200 mb-12 '>
                    <div className='bg-gray-200 font-semibold py-2 px-4 flex justify-between items-center'>
                        <div>
                        <div>Team: {team.teamName}</div>
                        <div className='text-sm font-normal'>Author: {team.author}</div>
                        </div>
                        <div><button className="btn py-1 px-3 bg-slate-400 rounded-sm text-white/75" onClick={()=>handleModal(team)}>create task</button></div>
                    </div>
                    <AddTaskModal team={teamInfo}></AddTaskModal>
                    <table key={i} className='w-full text-sm divide-y divide-gray-300'>                        
                        <thead className='bg-gray-200 font-normal py-3'>
                             <tr className=''>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>No</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Title</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Description</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Due date</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Level</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Assign to</th>
                                  <th className='px-4 py-3 text-left whitespace-nowrap'>Progress</th>
                             </tr>
                        </thead>
                        {/* {team?.tasks?.map((task, i) =>  */}
                        <tbody className='bg-white divide-y divide-gray-200'>
                             {
                                  team?.tasks?.map((task, i) => <tr key={task._id}>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{i + 1}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.title}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.description.length > 15 ? task.description.slice(0, 20) + "..." : task?.description}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.date}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.level}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.assignTo}</td>
                                       <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'><span className='bg-blue-700/20 px-3 py-1 rounded-md text-primary'>{task?.progress}</span></td>
                                       
                                  </tr>)
                             }

                        </tbody>
                   </table>
               </div>) }

                
          </div>
    );
};

export default Teams;