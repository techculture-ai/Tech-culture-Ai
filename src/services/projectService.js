const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const projectService = {
  // Get all projects
  async getAllProjects() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      return data.projects || [];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  // Get project by ID
  async getProjectById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch project');
      }
      const data = await response.json();
      return data.project;
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  }
};
