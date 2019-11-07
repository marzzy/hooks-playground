import React, { useState, useReducer } from 'react';

const initVal = [{ text: 'salam', id: 99 }];

function reducer(state, action) {
  switch (action.type) {
    case 'new':
      action.setTaskId(action.taskId + 1);
      action.setTask('');
      return [...state, {
        text: action.task,
        id: action.taskId,
      }];
    case 'delete':
      return state.filter((item) => item.id !== action.taskId);
    default:
      return state;
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initVal);
  const [task, setTask] = useState('');
  const [taskId, setTaskId] = useState(100);

  return (
    <div>
      <h1>
        todo list
      </h1>

      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="enter new task"
      />

      <button
        type="button"
        onClick={() => dispatch({
          type: 'new', task, taskId, setTaskId, setTask,
        })}
      >
        new todo
      </button>

      <ul>
        {state.map((item) => (
          <li key={item.id}>
            {item.id}
            .
            {item.text}
            <button
              type="button"
              onClick={() => dispatch({ type: 'delete', taskId: item.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
