import React from "react";

const TaskCard = () => {
  return (
    <div>
      {/* Replace with material ui cards */}
      <div className="bg-white dark:bg-gray-800 shadow-md h-40 rounded-2xl p-4 my-2">
        <label class="inline-flex items-center mt-3">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
          <span class="ml-2 text-gray-300">Task name</span>
        </label>
      </div>
    </div>
  );
};

export default TaskCard;
