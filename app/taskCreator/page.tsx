"use client";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import { supabase } from "../utils/supabase";
import GetTasks from "app/components/taskList";

export default function TaskCreator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDateTime, setDueDateTime] = useState("");
  const [feedback, setFeedback] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log("Error fetching tasks:", error);
    } else {
      setTasks(data);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const values = { title, description, status, duedate_time: dueDateTime };
    try {
      const { data, error } = await supabase.from("tasks").insert([values]);

      if (error) {
        throw error;
      }

      fetchData();
      setFeedback("Form submitted successfully");
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDateTime("");

    } catch (error) {
      console.log("Error occurred", { error });
      setFeedback("An error occurred");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      {feedback}
      <br />
      <br />

      <GetTasks task={tasks} setTask={setTasks} />
    </div>
  );
}
