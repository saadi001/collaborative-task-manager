import { useQuery } from '@tanstack/react-query';

const YourTask = () => {

        const {data:tasks = [], isLoading, refetch } = useQuery({
                queryKey : ["tasks"],
                queryFn: async () =>{
                    const res = await fetch('http://localhost:5000/tasks')
                    const data = await res.json()
                    console.log(data);
                    return data;
                }
        })

        const handleProgressChange = (id, newProgress) => {
                console.log(id, newProgress);
                const progress = {progress: newProgress}
                fetch(`http://localhost:5000/updateTask/${id}`, {
                    method: "PATCH",
                     headers: {
                        "content-type": "application/json"
                     },
                     body: JSON.stringify(progress)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    refetch()
                })
        }
    return (
        <div className='mx-5 sm:mx-12 lg:max-w-4xl lg:mx-auto xl:max-w-5xl  pt-5'>
               <p className='text-lg font-semibold text-slate-800 mb-3'>Tasks</p>                         

               <div className='overflow-x-auto rounded border border-gray-200'>
                    <table className='w-full text-sm divide-y divide-gray-300'>
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
                         <tbody className='bg-white divide-y divide-gray-200'>
                              {
                                   tasks?.map((task, i) => <tr key={task._id}>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{i + 1}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.title}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.description.length > 15 ? task.description.slice(0, 20) + "..." : task?.description}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.date}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.level}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{task?.assignTo}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>
                                        <select
                                                value={task?.progress}
                                                onChange={e => handleProgressChange(task._id, e.target.value)}
                                        >
                                                <option value="in_progress">In Progress</option>
                                                <option value="pending">Pending</option>              
                                                <option value="completed">Completed</option>
                                        </select>                                            
                                        </td>
                                        
                                   </tr>)
                              }

                         </tbody>
                    </table>
               </div>
          </div>
    );
};

export default YourTask;