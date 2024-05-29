import React from 'react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    // Fetch settings data from backend API
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        } else {
          throw new Error('Failed to fetch settings');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleSaveSettings = async (newSettings) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSettings),
      });
      if (response.ok) {
        // Update settings state
        setSettings(newSettings);
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Settings</h2>
      <p>Customize your bot settings here:</p>
      <form onSubmit={handleSaveSettings}>
        {/* Include input fields for different settings */}
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Dashboard;