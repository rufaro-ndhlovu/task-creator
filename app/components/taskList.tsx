"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function GetTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        console.log("Error fetching tasks:", error);
      } else {
        setTasks(data);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} {task.description} {task.status} {task.duedate_time}</li> // render title
        ))}
      </ul>
    </div>
  );
}
