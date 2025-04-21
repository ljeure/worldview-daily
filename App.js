// App.js with routing for quiz app and admin interface
import React, { useState, useEffect } from 'react';
import WorldviewDailyQuiz from './WorldviewDailyQuiz';
import AdminInterface from './AdminInterface';
import { loadWeeklyQuizData, getQuizForToday } from './dataLoader';

const App = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        // Check if we're in admin mode based on URL
        const urlParams = new URLSearchParams(window.location.search);
        const adminParam = urlParams.get('admin');
        
        if (adminParam === 'true') {
          setIsAdmin(true);
          setLoading(false);
          return;
        }
        
        // Load quiz data for regular users
        const weeklyData = await loadWeeklyQuizData();
        const todayQuiz = getQuizForToday(weeklyData);
        
        if (todayQuiz) {
          setCurrentQuiz(todayQuiz);
        } else {
          setError('No quiz available for today. Please check back later!');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading quiz:', err);
        setError('Failed to load quiz data. Please try again later.');
        setLoading(false);
      }
    };
    
    loadQuizData();
  }, []);

  // Handle toggling between admin and user mode
  const toggleAdminMode = () => {
    // Update URL without reloading the page
    const url = new URL(window.location);
    if (isAdmin) {
      url.searchParams.delete('admin');
    } else {
      url.searchParams.set('admin', 'true');
    }
    window.history.pushState({}, '', url);
    
    setIsAdmin(!isAdmin);
  };

  // Loading indicator
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Admin interface
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <AdminInterface />
          <div className="mt-4 text-center">
            <button 
              onClick={toggleAdminMode}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Switch to User View
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Worldview Daily</h1>
          <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
            <p>{error}</p>
          </div>
          <div className="mt-4">
            <button 
              onClick={toggleAdminMode}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Regular quiz view
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <WorldviewDailyQuiz quizData={currentQuiz} />
        <div className="mt-4 text-center">
          <button 
            onClick={toggleAdminMode}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
