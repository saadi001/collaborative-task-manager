import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const CreateTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleCreateTask = (data) => {
    console.log(data);
    const { title, level, description, date, assignTo } = data;
    const task = {
      title,
      level,
      description,
      date,
      assignTo,
      progress: "pending",
    };
    fetch("https://backend-gamma-lac.vercel.app/createTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("task created successfully.");
          console.log(result);
          reset();
        }
      });
  };
  return (
    <>
      <section className="max-w-4xl p-6 sm:mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-12 border mx-2">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Create new task
        </h2>

        <form onSubmit={handleSubmit(handleCreateTask)} className="">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="grid grid-cols-1 gap-6">             

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="title"
                >
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

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
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
            </div>

            {/* textarea  */}
            <div className="">
              <label
                className="text-gray-700 dark:text-gray-200"
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
                className="block w-full px-4 py-2 mt-2 h-36 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.description && (
                <p className="text-xs text-red-700 flex items-center mt-1 ml-1">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="">
              <label
                className="text-gray-700 dark:text-gray-200"
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

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
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
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateTask;
