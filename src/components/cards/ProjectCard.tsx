import type { Project } from '../../models/Project'
import UserProfiles from '../small-elements/UserProfiles';
import CountTasks from '../small-elements/CountTasks';
import type { Task } from '../../models/Task';
import type { User } from '../../models/User';
import Timer from '../small-elements/Timer';
import ProgressBar from '../small-elements/ProgressBar';
import {motion} from 'framer-motion';

interface ProjectCardProps {

    project: Project;
    tasks: Task[];
    participants: User[];
    endDate?: string; 

}

function ProjectCard({project, tasks, participants}: ProjectCardProps) {

        const projectTasks = tasks.filter(task => project.taskIds.includes(task.id));
        const projectParticipants = participants.filter(user => project.teamMembers.includes(user.id));

        const totalDays = Math.ceil(
         (new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24)
);

    return(

          <div className='project-card'>
        <div className='project-card__main-content'>
            <div className='project-card__main-content__features'>
                <span>{project.categories}</span> <span><CountTasks tasks={projectTasks}></CountTasks></span>
                <span><UserProfiles users={projectParticipants}></UserProfiles></span>
            </div>
            <div className='project-card__main-content__title'>
                <h3>{project.name}</h3>
            </div>
            <div className='project-card__main-content__progress'>
                <span><ProgressBar progress={project.progress}></ProgressBar> {project.progress}%</span>
            </div>
        </div>
        <div className='project-card__time'>
            <div className='project-card__time__timer'>
                <Timer dueDate={project.endDate} totalDays={totalDays}></Timer>
            </div>
            <div className='project-card__time__due-date'>
                <span>
                    Due: {project.endDate ? new Date(project.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}
                </span>
            </div>
        </div>
    </div>
    )


}

export default ProjectCard