
export interface Task {
  id: number;
  projectId: number;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'stuck';
  assignedTo?: string[]; 
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  categories?: string[];
  completed: boolean; 
  pinned: boolean;
  access: 'public' | 'private';
  privateAttachments?: {
    name: string;
    url: string;
    uploadedBy: string;
    uploadedAt: string;
  }[];

  createdAt?: string;
  updatedAt?: string;
}
