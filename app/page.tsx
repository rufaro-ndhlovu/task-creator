import React from 'react';
import TaskCreator from './taskCreator/page';

export const metadata = {
  title: "Task Creator",
};

export default function App() {

  return (
    <div>
      <h1>Create A Task</h1>
      <TaskCreator />
    </div>
  )
}
