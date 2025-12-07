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
    <div>
      <h2>Tasks List</h2>
      <ul>
        {task.map((value) => (
          <li key={value.id}>{value.title} {value.description} {value.status} {new Date(value.duedate_time).toLocaleString("en-GB")}</li> // render title
        ))}
      </ul>
    </div>
  );
}
