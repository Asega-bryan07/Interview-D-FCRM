class ApiService {
    static async getUserData() {
      const response = await fetch('/api/v1/get-user/1'); // a backend API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    }
  }
  
  export default ApiService;
  