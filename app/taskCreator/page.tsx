"use client";
import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function TaskCreator() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate_time: ""
  });
  const [title, setTitle] = useState(null);
  const [dueDateTime, setDueDateTime] = useState(null);

  return (
    <div>
      <h1>Create A Task</h1>

      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
        <br />
        <br />

        <label htmlFor="description">Description: </label>
        <input type="text" id="desription" name="desription" />
        <br />
        <br />

        <label htmlFor="status">Status: </label>
        <select name="status" id="status">
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
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
