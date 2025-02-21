import React from 'react';
import { User, Award, Target, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Profile() {
  const achievements = [
    { title: "Screen Time Master", description: "Reduced screen time by 20% this week", date: "2024-03-15" },
    { title: "Focus Champion", description: "Completed 10 focus sessions", date: "2024-03-14" },
    { title: "Break Time Pro", description: "Maintained regular break schedule for 5 days", date: "2024-03-13" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-10 w-10 text-indigo-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-semibold text-gray-900">Sushank yadav</h1>
              <p className="text-gray-500">yadavsushank34@gmail.com</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Goals and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2 text-indigo-600" />
            Daily Goals
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Screen Time Limit</span>
                <span>6 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Focus Sessions</span>
                <span>3 of 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Break Time</span>
                <span>45 minutes</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-indigo-600" />
            Recent Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-4 py-2">
                <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.description}</p>
                <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="john.doe@example.com"
            />
          </div>
          <div className="flex space-x-4">
            <Button>Save Changes</Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}