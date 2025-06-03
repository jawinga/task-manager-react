import React from 'react'
import type { Task } from '../../models/Task'

interface CountTasksProps {
    
    tasks:Task[]
}

function CountTasks({tasks}:CountTasksProps) {

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

      return (
        <div>
            {completedTasks}/{totalTasks}
        </div>
    )

}

export default CountTasks