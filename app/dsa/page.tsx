// app/dsa/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaCode, FaBook, FaLightbulb, FaRocket, FaTrophy, FaFire, 
  FaCheckCircle, FaCircle, FaChartLine, FaClock, FaStar,
  FaYoutube, FaGithub, FaGlobe, FaDownload, FaPlus, FaTrash
} from 'react-icons/fa';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: 'sheet' | 'practice' | 'learn' | 'tips';
  difficulty?: 'easy' | 'medium' | 'hard';
  estimatedTime?: string;
}

interface Resource {
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface Topic {
  name: string;
  problems: number;
  completed: number;
  icon: React.ReactNode;
  color: string;
}

export default function DSAPage() {
// Update the initial tasks to be more realistic
const [tasks, setTasks] = useState<Task[]>([
  { id: 1, text: 'Master Sliding Window Pattern', completed: false, category: 'learn', difficulty: 'medium', estimatedTime: '3 days' },
  { id: 2, text: 'Solve 50 Tree problems on LeetCode', completed: false, category: 'practice', difficulty: 'hard', estimatedTime: '1 week' },
  { id: 3, text: 'Complete Bit Manipulation (Striver)', completed: false, category: 'sheet', difficulty: 'easy', estimatedTime: '2 days' },
]);
  const [newTask, setNewTask] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);
  const [filter, setFilter] = useState<'all' | 'sheet' | 'practice' | 'learn' | 'tips'>('all');
  const [streak, setStreak] = useState(7);

  const topics: Topic[] = [
    { name: 'Arrays', problems: 50, completed: 35, icon: <FaCode />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Strings', problems: 40, completed: 28, icon: <FaBook />, color: 'from-purple-500 to-pink-500' },
    { name: 'Linked Lists', problems: 30, completed: 22, icon: <FaChartLine />, color: 'from-green-500 to-emerald-500' },
    { name: 'Trees', problems: 45, completed: 30, icon: <FaRocket />, color: 'from-orange-500 to-red-500' },
    { name: 'Graphs', problems: 40, completed: 18, icon: <FaTrophy />, color: 'from-yellow-500 to-amber-500' },
    { name: 'Dynamic Programming', problems: 60, completed: 25, icon: <FaLightbulb />, color: 'from-indigo-500 to-purple-500' },
  ];

  // Inside DSAPage component
const resources: Resource[] = [
  { title: 'Striver A2Z Sheet', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', icon: <FaBook />, color: 'from-blue-500 to-cyan-500' },
  { title: 'LeetCode 75', url: 'https://leetcode.com/studyplan/leetcode-75/', icon: <FaCode />, color: 'from-orange-500 to-yellow-500' },
  { title: 'Love Babbar Sheet', url: 'https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/', icon: <FaFire />, color: 'from-red-500 to-orange-600' },
  { title: 'NeetCode Roadmap', url: 'https://neetcode.io/roadmap', icon: <FaChartLine />, color: 'from-green-500 to-emerald-600' },
  { title: 'InterviewBit', url: 'https://www.interviewbit.com/practice/', icon: <FaTrophy />, color: 'from-indigo-500 to-purple-500' },
  { title: 'CSES Problem Set', url: 'https://cses.fi/problemset/', icon: <FaGlobe />, color: 'from-gray-700 to-gray-900' },
];


  const handleToggle = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        category: 'practice',
        difficulty: 'medium',
        estimatedTime: '1 week'
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setShowAddTask(false);
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.category === filter);
  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  const getDifficultyColor = (difficulty?: string) => {
    switch(difficulty) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'sheet': return <FaBook className="text-blue-500" />;
      case 'practice': return <FaCode className="text-purple-500" />;
      case 'learn': return <FaLightbulb className="text-yellow-500" />;
      case 'tips': return <FaStar className="text-pink-500" />;
      default: return <FaCircle />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-xl shadow-lg">
              <FaCode className="text-white text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">DSA Mastery Hub</h1>
              <p className="text-gray-500 text-sm mt-1">Track your progress and ace coding interviews</p>
            </div>
          </div>
          <Link 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats & Topics */}
        <div className="lg:col-span-1 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-5 shadow-lg text-white">
              <div className="flex items-center justify-between mb-2">
                <FaCheckCircle className="text-3xl opacity-80" />
                <span className="text-3xl font-bold">{completedCount}</span>
              </div>
              <p className="text-sm opacity-90">Completed</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-5 shadow-lg text-white">
              <div className="flex items-center justify-between mb-2">
                <FaFire className="text-3xl opacity-80" />
                <span className="text-3xl font-bold">{streak}</span>
              </div>
              <p className="text-sm opacity-90">Day Streak</p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Overall Progress</h2>
              <span className="text-2xl font-bold text-purple-600">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500 shadow-md"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{completedCount} of {tasks.length} tasks completed</p>
          </div>

          {/* Topics Progress */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Topics Mastery</h2>
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 bg-gradient-to-r ${topic.color} rounded-lg text-white shadow-md`}>
                        {topic.icon}
                      </div>
                      <span className="font-medium text-gray-700">{topic.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{topic.completed}/{topic.problems}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${topic.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(topic.completed / topic.problems) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Resources</h2>
            <div className="grid grid-cols-2 gap-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex flex-col items-center space-y-2">
                    <div className={`p-3 bg-gradient-to-r ${resource.color} rounded-lg text-white shadow-lg text-xl`}>
                      {resource.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{resource.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filter Buttons */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4">
            <div className="flex flex-wrap gap-2">
              {(['all', 'sheet', 'practice', 'learn', 'tips'] as const).map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filter === filterOption
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tasks List */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Learning Path</h2>
              <button
                onClick={() => setShowAddTask(!showAddTask)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <FaPlus />
                <span>Add Task</span>
              </button>
            </div>

            {showAddTask && (
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                  placeholder="Enter new task..."
                  className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 mb-3"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddTask}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddTask(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {filteredTasks.map(task => (
                <div
                  key={task.id}
                  className={`group relative p-5 rounded-xl transition-all duration-300 ${
                    task.completed
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200'
                      : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-grow">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                        className="mt-1 h-6 w-6 text-purple-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-purple-500 cursor-pointer"
                      />
                      
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-2">
                          {getCategoryIcon(task.category)}
                          <span className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {task.text}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          {task.difficulty && (
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(task.difficulty)}`}>
                              {task.difficulty.toUpperCase()}
                            </span>
                          )}
                          {task.estimatedTime && (
                            <span className="flex items-center space-x-1 text-xs text-gray-500">
                              <FaClock />
                              <span>{task.estimatedTime}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {task.completed && (
                        <FaCheckCircle className="text-green-500 text-2xl" />
                      )}
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTasks.length === 0 && (
              <div className="text-center py-12">
                <FaRocket className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No tasks in this category yet!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}