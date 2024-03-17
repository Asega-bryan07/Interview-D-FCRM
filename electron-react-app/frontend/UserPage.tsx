//the userpage
import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

function UserPage() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data from backend when component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await ApiService.getUserData(); // Uses the API service to fetch data
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error); // failure to reachh the API service
    }
  };

  return (
    <div>
      <h1>User Page</h1>
      {userData && (
        <div>
          <h2>User Data:</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Residence: {userData.residence}</p>
        </div>
      )}
    </div>
  );
}

export default UserPage;
