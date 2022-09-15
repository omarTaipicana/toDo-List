import React from 'react';

const ToDoList = ({ toDo, deleteToDo, selectToDo }) => {
    return (
        <div className='list-content'>
            <h1>To do List</h1>
            <ul>
                {
                    toDo.map(toDo => (
                        <li key={toDo.id}>
                            <p><b>Tilte:</b>{" "}{toDo.title}</p>
                            <p><b>Description:</b>{" "}{toDo.description}</p>
                            <p><b>Is Completed:</b>{" "}{toDo.isCompleted ? "Yes" : "No"}</p>
                            <div className='btn-list-cotent'>
                                <button
                                    onClick={() => deleteToDo(toDo.id)}
                                    className='btn-list'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                                <button
                                    onClick={() => selectToDo(toDo)}
                                    className='btn-list'>
                                  <i className="fa fa-file-pen"></i>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToDoList;