import type { Task } from '../models/Task';

export const mockTasks: Task[] = [
    {
        id: 101,
        title: 'Design Header',
        description: 'Redesign the top section including nav bar and hero.',
        status: 'stuck',
        assignedTo: ['u0'],
        dueDate: '2025-06-10T23:59:59',
        projectId: 1,
        priority: 'high',
        completed: false,
        pinned: false,
        access: 'private',


    },
    {
        id: 102,
        title: 'Footer Layout',
        description: 'Create a modern footer with links and newsletter.',
        status: 'not-started',
        assignedTo: ['u2'],
        dueDate: '2025-06-12T23:59:59',
        projectId: 1,
        priority: 'medium',
        completed: false,
        pinned: false,
        access: 'public',

    },
    // Tasks for project id 2
    {
        id: 201,
        title: 'API Integration',
        description: 'Integrate backend APIs for user authentication.',
        status: 'completed',
        assignedTo: ['u3'],
        dueDate: '2025-06-15T23:59:59',
        projectId: 2,
        priority: 'high',
        completed: false,
        pinned: false,
        access: 'public',
    },
    {
        id: 202,
        title: 'Dashboard UI',
        description: 'Develop the dashboard interface for analytics.',
        status: 'in-progress',
        assignedTo: ['u4'],
        dueDate: '2025-06-18T23:59:59',
        projectId: 2,
        priority: 'medium',
        completed: false,
        pinned: false,
        access: 'private',

    },
    {
        id: 203,
        title: 'Write Unit Tests',
        description: 'Add unit tests for the new dashboard components.',
        status: 'not-started',
        assignedTo: ['u5'],
        dueDate: '2025-06-20T23:59:59',
        projectId: 2,
        priority: 'low',
        completed: false,
        pinned: false,
        access: 'public',

    },
    {
        id: 204,
        title: 'Code Review - Dashboard',
        description: 'Add unit tests for the new dashboard components.',
        status: 'stuck',
        assignedTo: ['u5'],
        dueDate: '2025-06-04T23:59:59',
        projectId: 2,
        priority: 'low',
        completed: false,
        pinned: false,
        access: 'public',

    },
];
