import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ToDoForm = ({ addToDo, toDoSelected, updateToDo, deselectedToDo }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)

    useEffect(() => {
        if (toDoSelected !== null) {
            setTitle(toDoSelected.title)
            setDescription(toDoSelected.description);
            setIsCompleted(toDoSelected.isCompleted);
        }
    }, [toDoSelected])

    const submit = (e) => {
        e.preventDefault();
        const newToDo = {
            id: Date.now(),
            title: title,
            description: description,
            isCompleted: isCompleted,
        }
        if (toDoSelected) {
            updateToDo(newToDo)
        } else {
            addToDo(newToDo)
        }
        console.log(newToDo)
    }
    const clear = () => {
        setTitle("");
        setDescription("");
        setIsCompleted(false);
        deselectedToDo()
    }

    return (
        <form onSubmit={submit}>
            <h1>To do Form</h1>
            <div className='input-content'>
                <label htmlFor="title">Title</label>
                <br />
                <input className='input inTilte'
                    type="text"
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className='input-content'>
                <label htmlFor="description">Description</label>
                <br />
                <textarea className='input inTextArea'
                    id="description"
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className='input-content'>
                <label htmlFor="isCompleted">Is Completed</label>
                <input
                    type="checkbox"
                    id='isCompleted'
                    checked={isCompleted}
                    onChange={e => setIsCompleted(e.target.checked)}
                />
            </div>
            <div className='btn-form-content'>
                <button className='btn-form'>{toDoSelected ? "Update" : "Submit"}</button>
                <button onClick={clear} className='btn-form' type='button'>Clear</button>
            </div>
        </form>
    );
};

export default ToDoForm;