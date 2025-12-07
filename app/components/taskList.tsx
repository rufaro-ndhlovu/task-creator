"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function GetTasks({task , setTask}) {
  

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from("tasks").select("*");
      if (error) {
        console.log("Error fetching tasks:", error);
      } else {
        setTask(data);
      }
    }

    fetchTasks();
  }, []);

  return (
       <table border={1} cellPadding={5} style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Due Date & Time</th>
        </tr>
      </thead>
      <tbody>
        {task.map((t) => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>{t.status}</td>
            <td>{new Date(t.duedate_time).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
