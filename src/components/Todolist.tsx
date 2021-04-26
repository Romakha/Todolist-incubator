import React from 'react';



type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}
type TodolistTypeProps = {
  title: string,
  tasks: Array<TaskType>
}

export function Todolist(props:TodolistTypeProps) {
  return (
    <div className="qwerty">
      <div>
        <h1>{props.title}</h1>
        <div>
          <input type="text"/>
          <button>+</button>
        </div>
        <ul>
          {props.tasks.map (t => <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
            <button onClick={ () => {} }>x</button>
            </li>)}
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
} 