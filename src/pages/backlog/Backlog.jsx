import React from 'react'
import useDataFetching from '../../hooks/useDataFetching'
import './Backlog.css'
import Task from '../../components/task/Task'

const Backlog = () => {
    const [loading, error, tasks] = useDataFetching('http://localhost:5000/tasks');
  return (
    <div>
        <div className='Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className='Tasks-wrapper'>
                {loading || error ? (
                    <span>{error || "Loading..."}</span>
                ) : (
                    tasks.map((task)=>(
                        <Task key={task.id}
                        title={task.title}
                        body={task.body}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
  )
}

export default Backlog