export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled' | 'stuck';
  teamMembers: string[]; // All members involved in this project (superset of all task members)
  taskIds: number[];     // Link to associated tasks
  progress: number;      // % complete
  priority: 'low' | 'medium' | 'high' | 'critical';
  access: 'public' | 'private';
  categories?: string[]; // Optional categories for better organization

  // Global project-level files accessible to the whole team
  attachments?: {
    name: string;
    url: string;
    uploadedBy: string;
    uploadedAt: string;
  }[];

  // Project-wide comments (general discussion, updates)
  comments?: {
    author: string;
    message: string;
    timestamp: string;
  }[];

  tags?: string[];
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
  archived?: boolean;
}
