// app/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaBook, FaChartLine, FaCheckCircle, FaRobot, FaCrown, 
  FaFire, FaStar, FaTrophy, FaCode, FaBrain, FaRocket,
  FaUserCircle, FaBell, FaCalendarAlt, FaChartBar,
  FaLightbulb, FaGraduationCap, FaQuestionCircle, FaClock,
  FaArrowRight, FaMedal, FaUsers, FaBolt
} from 'react-icons/fa';
import Link from 'next/link';

interface Activity {
  icon: React.ReactNode;
  text: string;
  time: string;
  color: string;
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
    return () => clearInterval(timer);
  }, []);

  const recentActivities: Activity[] = [
    { icon: <FaCode />, text: 'Completed 5 DSA problems', time: '2 hours ago', color: 'text-blue-500' },
    { icon: <FaCheckCircle />, text: 'Finished Aptitude Quiz', time: '5 hours ago', color: 'text-green-500' },
    { icon: <FaLightbulb />, text: 'Learned DP concepts', time: 'Yesterday', color: 'text-yellow-500' },
  ];

  const upcomingMilestones = [
    { title: 'Complete 100 LeetCode Problems', progress: 73, icon: <FaCode />, color: 'from-blue-500 to-cyan-500' },
    { title: 'Master System Design Basics', progress: 45, icon: <FaRocket />, color: 'from-purple-500 to-pink-500' },
    { title: 'Finish Striver A2Z Sheet', progress: 62, icon: <FaBook />, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl shadow-lg">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Placement Prep Pro
                </h1>
                <p className="text-xs text-gray-500">Your journey to success</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <FaBell className="text-gray-600 text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-xl">
                <FaUserCircle className="text-purple-600 text-2xl" />
                <span className="font-semibold text-gray-800 hidden md:block">Atif Malik</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{greeting}, Atif ! 👋</h2>
              <p className="text-blue-100 mb-6">Ready to level up your placement preparation today?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaFire className="text-orange-300" />
                    <span className="text-sm opacity-90">Streak</span>
                  </div>
                  <p className="text-2xl font-bold">7 Days</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaStar className="text-yellow-300" />
                    <span className="text-sm opacity-90">XP Points</span>
                  </div>
                  <p className="text-2xl font-bold">1,250</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaTrophy className="text-yellow-300" />
                    <span className="text-sm opacity-90">Rank</span>
                  </div>
                  <p className="text-2xl font-bold">#47</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaChartBar className="text-green-300" />
                    <span className="text-sm opacity-90">Ready</span>
                  </div>
                  <p className="text-2xl font-bold">60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Features */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personalized Roadmap */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaRocket className="mr-3 text-purple-500" />
                  Your Learning Roadmap
                </h2>
                <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
                  <span>View All</span>
                  <FaArrowRight />
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Data Structures & Algorithms', progress: 75, color: 'from-green-500 to-emerald-600', icon: <FaCode /> },
                  { title: 'Aptitude & CS Fundamentals', progress: 40, color: 'from-yellow-500 to-orange-600', icon: <FaBrain /> },
                  { title: 'System Design & Projects', progress: 20, color: 'from-red-500 to-pink-600', icon: <FaChartLine /> },
                ].map((item, index) => (
                  <div key={index} className="group bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg text-white shadow-lg`}>
                          {item.icon}
                        </div>
                        <span className="font-semibold text-gray-800">{item.title}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-600">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 bg-gradient-to-r ${item.color} shadow-md`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dsa" className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaChartLine className="text-white text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">DSA Hub</h3>
                  <p className="text-sm text-gray-600 mb-3">Master algorithms & data structures</p>
                  <div className="flex items-center text-cyan-600 font-medium">
                    <span>Explore</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/aptitude" className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaBrain className="text-white text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Aptitude Hub</h3>
                  <p className="text-sm text-gray-600 mb-3">Ace quantitative & reasoning</p>
                  <div className="flex items-center text-orange-600 font-medium">
                    <span>Explore</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/gpt" className="group">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaRobot className="text-white text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Placement GPT</h3>
                  <p className="text-sm text-gray-600 mb-3">AI-powered doubt solver</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Chat Now</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Upcoming Milestones */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <FaRocket className="mr-3 text-green-500" />
                Upcoming Milestones
              </h2>
              <div className="space-y-4">
                {upcomingMilestones.map((milestone, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-gradient-to-r ${milestone.color} rounded-lg text-white shadow-md`}>
                          {milestone.icon}
                        </div>
                        <span className="font-medium text-gray-800">{milestone.title}</span>
                      </div>
                      <span className="text-sm font-bold text-purple-600">{milestone.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${milestone.color}`}
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Stats */}
          <div className="space-y-6">
            {/* Daily Goals */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                Today`&apos;`s Goals
              </h2>
              <div className="space-y-3">
                {[
                  { text: 'Solve 3 DSA problems', done: true },
                  { text: 'Complete 1 quiz', done: true },
                  { text: 'Review CS concepts', done: false },
                  { text: 'Practice mock interview', done: false },
                ].map((goal, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${goal.done ? 'bg-green-50' : 'bg-gray-50'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${goal.done ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {goal.done && <FaCheckCircle className="text-white text-xs" />}
                    </div>
                    <span className={`text-sm ${goal.done ? 'line-through text-gray-500' : 'text-gray-700 font-medium'}`}>
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold flex items-center mb-4">
                <FaMedal className="mr-2" />
                Recent Achievements
              </h2>
              <div className="space-y-3">
                {[
                  { title: '7-Day Streak', icon: '🔥' },
                  { title: '50 Problems Solved', icon: '⚡' },
                  { title: 'Quiz Master', icon: '🎯' },
                ].map((achievement, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className="font-medium">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <FaClock className="mr-2 text-purple-500" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`${activity.color} mt-1`}>
                      {activity.icon}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-800">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Preview */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <FaUsers className="mr-2 text-indigo-500" />
                Leaderboard
              </h2>
              <div className="space-y-3">
                {[
                  { name: 'Alice Chen', points: 3200, rank: 1 },
                  { name: 'Bob Smith', points: 2950, rank: 2 },
                  { name: 'You (John)', points: 1250, rank: 47, highlight: true },
                ].map((user, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${user.highlight ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300' : 'bg-gray-50'}`}>
                    <div className="flex items-center space-x-3">
                      <span className={`font-bold ${user.rank <= 3 ? 'text-yellow-500' : 'text-gray-600'}`}>
                        #{user.rank}
                      </span>
                      <span className={`text-sm ${user.highlight ? 'font-bold text-purple-700' : 'text-gray-700'}`}>
                        {user.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-600">{user.points} XP</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}