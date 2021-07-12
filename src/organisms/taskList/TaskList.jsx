import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "src/constants/stateAtoms.js";
import useLocalStorage from "src/hooks/useLocalStorage";
import TaskCard from "src/organisms/taskcard/TaskCard.jsx";

const TaskList = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [persistedTasksList, setPersistedTasksList] = useLocalStorage(
    "tasks",
    []
  );
  useEffect(() => {
    setTasks(persistedTasksList);
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          id={task.id}
          name={task.name}
          tags={task.tags}
          isCompleted={task.isCompleted}
        />
      ))}
    </>
  );
};

export default TaskList;
