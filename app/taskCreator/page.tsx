"use client";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css"; // For selecting date and time
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Styles from "./page.module.css";

import { supabase } from "../utils/supabase"; // Supabase client for database operations
import GetTasks from "app/components/taskList"; // Component to display task list

export default function TaskCreator() {
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");
  const [feedback, setFeedback] = useState(""); // Feedback message after submission
  const [tasks, setTasks] = useState([]); // Tasks fetched from database

  // Function to fetch all tasks from Supabase
  const fetchData = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log("Error fetching tasks:", error);
    } else {
      setTasks(data);
    }
  };

  // Form submission handler
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on submit

    const values = { title, description, status, duedate_time: dueDateTime };
    try {
      // Insert new task into Supabase
      const { data, error } = await supabase.from("tasks").insert([values]);

      if (error) {
        throw error;
      }

      // Refresh task list after successful insert
      fetchData();
      setFeedback("Form submitted successfully");

      // Reset form fields
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDateTime("");
    } catch (error) {
      console.log("Error occurred", { error });
      setFeedback("An error occurred"); // Show error feedback
    }
  }

  return (
    <div className={Styles.glasscontainer}>
      {/* Form container with glassmorphism effect */}
      <form onSubmit={handleSubmit}>
        {/* Form for creating tasks */}

        {/* Title field */}
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />

        {/* Description field */}
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="desription"
          name="desription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        {/* Status dropdown */}
        <label htmlFor="status">Status: </label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <br />

        {/* Date & time picker */}
        <label htmlFor="datepiker">Select A Date And Time: </label>
        <DateTimePicker
          onChange={(data) => setDueDateTime(data)}
          value={dueDateTime}
          format="'dd-MM-y h:mm a"
          locale="en"
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <br />
      {/* Feedback message */}
      {feedback}
      <br />
      <br />

      {/* Task list display */}
      <GetTasks task={tasks} setTask={setTasks} />
    </div>
  );
}
