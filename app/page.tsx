import React from "react";
import TaskCreator from "./taskCreator/page";
import Styles from "./page.module.css";

export const metadata = {
  title: "Task Creator",
};

export default function App() {
  return (
    <div className={Styles.container}>
      <h1>Create A Task</h1>
      <TaskCreator />
    </div>
  );
}
