import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const CreateTeam = () => {
    const {register,formState: { errors }, handleSubmit, reset} = useForm();

      const handleCreateTeam = (data) => {     
        const {teamName,author,teamMember} = data;       
            const teamMembersArray = teamMember.split(/\s*,\s*|\s+/);
            const team = {
                teamName,
                author,
                members: teamMembersArray,
                tasks: []
            }
            console.log(team);
            fetch("http://localhost:5000/createTeam", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(team)
            })
            .then(res => res.json())
            .then((result) => {
                if (result.acknowledged) {
                  toast.success("team created successfully.");
                  console.log(result);
                  reset();
                }
              })
            
      }
  return (
    <div>
      <section className="max-w-4xl p-6 my-12 border sm:mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mx-2" >
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Create your team
        </h2>

        <form onSubmit={handleSubmit(handleCreateTeam)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="grid grid-cols-1 gap-6">             
                {/* team name  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                >
                  Team Name
                </label>
                <input
                  {...register("teamName", { required: "team name is required" })}
                  id="title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors.teamName && (
                  <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                    {errors.teamName.message}
                  </p>
                )}
              </div>
                
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="Date"
                >
                  Author email
                </label>
                <input
                  {...register("author", { required: "author name is required" })}
                  type="email"
                  className="block w-full px-4 py-2 mt-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors.author && (
                  <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                    {errors.author.message}
                  </p>
                )}
              </div>
            </div>

            {/* team member list  */}
            <div className="">
              <label
                className="text-gray-700 dark:text-gray-200"
              >
                Team members <span className="text-xs font-semibold">(use comma(,) for multiple member)</span>
              </label>
              <textarea
                {...register("teamMember", {
                  required: "Member name is required",
                })}
                placeholder="emails of team member"
                className="block w-full px-4 py-2 mt-2 h-36 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.teamMember && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.teamMember?.message}
                </p>
              )}
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateTeam;
