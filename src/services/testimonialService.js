const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const testimonialService = {
  // Get all testimonials
  async getAllTestimonials() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/testimonials`);
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const data = await response.json();
      return data.testimonials || [];
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  // Get testimonial by ID
  async getTestimonialById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/testimonials/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch testimonial');
      }
      const data = await response.json();
      return data.testimonial;
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      return null;
    }
  }
};
