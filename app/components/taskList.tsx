"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function GetTasks({ task, setTask }) {
  // Fetch tasks on component mount
  useEffect(() => {
    async function fetchTasks() {
      // Fetch all tasks from the "tasks" table in Supabase
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        console.log("Error fetching tasks:", error);
      } else {
        setTask(data); // Update parent state with fetched tasks
      }
    }

    // Call fetchTasks when component mounts
    fetchTasks();
  }, []);

  return (
    <table
      border={1}
      cellPadding={5}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      {/* Table to display tasks with nice styling */}
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Due Date & Time</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over each task and create a table row */}
        {task.map((t) => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>{t.status}</td>
            {/* Format date string for readability */}
            <td>{new Date(t.duedate_time).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
