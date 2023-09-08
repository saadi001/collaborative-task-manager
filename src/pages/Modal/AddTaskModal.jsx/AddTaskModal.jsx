import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddTaskModal = ({ team }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleTask = (data) => {
    const { title, level, description, date, assignTo } = data;
    const task = {
        title,
        level,
        description,
        date,
        assignTo,
        progress: "pending",
      };
      fetch(`http://localhost:5000/addTaskInTeam/${team._id}`, {
        method: "PATCH",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(task)
      })
      .then(res => res.json())
      .then((result) => {
        if (result.modifiedCount === 1) {
          toast.success("task created successfully.");
          reset();
          Navigate("/")
        }
      })
  }
  return (
    <>
      <dialog id="addTaskModal" className="modal p-3 w-[450px]  rounded-md">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-lg ">Team: {team?.teamName}</h3>
          <div className="w-full mt-3">

            {/* task title  */}
            <form onSubmit={handleSubmit(handleTask)}>
            <div className="w-full mb-2">
              <label className="text-gray-700 text-sm" htmlFor="title">
                Task Title
              </label>
              <input
                  {...register("title", { required: "taskname is required" })}
                id="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.title && (
                  <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                    {errors.title.message}
                  </p>
                )}
            </div>

            <div className="mb-2">
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="emailAddress"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
                placeholder="Description..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.description && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="Date"
              >
                Due Date
              </label>
              <input
                {...register("date", { required: "Due data is required" })}
                id="Date"
                type="date"
                className="block w-full px-4 py-2 mt-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.date && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="priorityLevel"
              >
                Priority Level
              </label>
              <select
                {...register("level", { required: "this field is required." })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="top">Top</option>
                <option value="average">Average</option>
                <option value="low">Low</option>
              </select>

              {errors.level && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.level.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="assign"
              >
                Assign to
              </label>
              <input
                {...register("assignTo", {
                  required: "This field is required",
                })}
                id="assign"
                type="email"
                placeholder="write email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.assignTo && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.assignTo.message}
                </p>
              )}
            </div>

            <div className="flex justify-end mt-6">
            <button className="px-8 text-sm py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Create
            </button>
          </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddTaskModal;
