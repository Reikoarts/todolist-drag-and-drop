import React, { useEffect, useState } from 'react'
import './Board.css'
import Lane from '../lane/Lane';
import useDataFetching from '../../hooks/useDataFetching';

function onDragStart(e, id){
    e.dataTransfer.setData('id', id);
}

function onDragOver(e){
    e.preventDefault();
}

function Board(){

    function onDrop(e, laneId){
        const id = e.dataTransfer.getData('id');
        const updatedTasks = tasks.filter((task) => {
            if(task.id.toString() == id){
                task.lane = laneId
            }

            return tasks
        })

        setTasks(updatedTasks);
    }

    const lanes = [
        {id: 1, title: "To Do"},
        {id: 2, title: "In Progress"},
        {id: 3, title: "Review"},
        {id: 4, title: "Done"},
    ];

    const [loading, error, data] = useDataFetching('http://localhost:5000/tasks');

    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        setTasks(data)
    }, [data])

    return (
        <div className='Board-wrapper'>
            {lanes.map((lane) => (
                <Lane 
                key={lane.id}
                laneId={lane.id}
                title={lane.title}
                loading={loading}
                error={error}
                tasks={tasks.filter((task) => task.lane == lane.id)}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                />
            ))}
        </div>
    )
    
}

export default Board