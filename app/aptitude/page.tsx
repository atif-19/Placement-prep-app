// app/aptitude/page.tsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaBrain, FaCalculator, FaBook, FaLightbulb, FaDatabase, 
  FaNetworkWired, FaServer, FaCube, FaTrophy, FaClock,
  FaChartLine, FaFire, FaStar, FaPlay, FaCheck, FaLock,
  FaQuestionCircle, FaBolt, FaGraduationCap, FaBuilding
} from 'react-icons/fa';

interface QuizCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  questionsCount: number;
  completedQuestions: number;
  timePerQuiz: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface ConceptCard {
  id: string;
  subject: string;
  topic: string;
  icon: React.ReactNode;
  color: string;
  learned: boolean;
  cardsCount: number;
}

interface CompanyQuestion {
  company: string;
  logo: string;
  questionsCount: number;
  difficulty: string;
  lastUpdated: string;
}

export default function AptitudePage() {
  const [selectedTab, setSelectedTab] = useState<'quizzes' | 'concepts' | 'companies' | 'tips'>('quizzes');
  const [streak, setStreak] = useState(12);
  const [totalPoints, setTotalPoints] = useState(2450);

  const quizCategories: QuizCategory[] = [
    {
      id: 'quantitative',
      title: 'Quantitative Aptitude',
      icon: <FaCalculator />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      questionsCount: 250,
      completedQuestions: 180,
      timePerQuiz: '15 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'verbal',
      title: 'Verbal Reasoning',
      icon: <FaBook />,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
      questionsCount: 200,
      completedQuestions: 145,
      timePerQuiz: '12 min',
      difficulty: 'Beginner'
    },
    {
      id: 'logical',
      title: 'Logical Reasoning',
      icon: <FaBrain />,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
      questionsCount: 180,
      completedQuestions: 120,
      timePerQuiz: '18 min',
      difficulty: 'Advanced'
    }
  ];

  const conceptCards: ConceptCard[] = [
    { id: '1', subject: 'Operating System', topic: 'Process Scheduling', icon: <FaServer />, color: 'from-orange-500 to-red-500', learned: true, cardsCount: 45 },
    { id: '2', subject: 'Database Management', topic: 'Normalization', icon: <FaDatabase />, color: 'from-blue-500 to-indigo-500', learned: true, cardsCount: 38 },
    { id: '3', subject: 'Computer Networks', topic: 'TCP/IP Model', icon: <FaNetworkWired />, color: 'from-green-500 to-teal-500', learned: false, cardsCount: 42 },
    { id: '4', subject: 'OOPs Concepts', topic: 'Inheritance & Polymorphism', icon: <FaCube />, color: 'from-purple-500 to-pink-500', learned: false, cardsCount: 35 },
    { id: '5', subject: 'Operating System', topic: 'Memory Management', icon: <FaServer />, color: 'from-yellow-500 to-orange-500', learned: false, cardsCount: 40 },
    { id: '6', subject: 'Database Management', topic: 'Transactions & ACID', icon: <FaDatabase />, color: 'from-cyan-500 to-blue-500', learned: true, cardsCount: 32 }
  ];

  const companyQuestions: CompanyQuestion[] = [
    { company: 'Google', logo: '🔍', questionsCount: 150, difficulty: 'Hard', lastUpdated: '2 days ago' },
    { company: 'Microsoft', logo: '🪟', questionsCount: 180, difficulty: 'Medium', lastUpdated: '1 week ago' },
    { company: 'Amazon', logo: '📦', questionsCount: 200, difficulty: 'Medium', lastUpdated: '3 days ago' },
    { company: 'TCS', logo: '💼', questionsCount: 250, difficulty: 'Easy', lastUpdated: '1 day ago' },
    { company: 'Infosys', logo: '🏢', questionsCount: 220, difficulty: 'Easy', lastUpdated: '5 days ago' },
    { company: 'Wipro', logo: '🌐', questionsCount: 190, difficulty: 'Easy', lastUpdated: '1 week ago' }
  ];

  const tips = [
    {
      category: 'Time Management',
      icon: <FaClock />,
      color: 'from-blue-500 to-cyan-500',
      tips: [
        'Allocate specific time slots for each question type',
        'Practice with a timer to build speed',
        'Skip difficult questions initially, return later',
        'Use elimination technique for MCQs'
      ]
    },
    {
      category: 'Quick Math Tricks',
      icon: <FaBolt />,
      color: 'from-purple-500 to-pink-500',
      tips: [
        'Learn multiplication tables up to 20',
        'Master percentage shortcuts (10%, 25%, 50%)',
        'Use Vedic math techniques for faster calculations',
        'Memorize common squares and cubes'
      ]
    },
    {
      category: 'Logical Patterns',
      icon: <FaLightbulb />,
      color: 'from-green-500 to-emerald-500',
      tips: [
        'Identify series patterns: arithmetic, geometric, fibonacci',
        'Practice blood relation diagrams regularly',
        'Use Venn diagrams for set theory problems',
        'Create truth tables for complex logical statements'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': case 'beginner': return 'text-green-600 bg-green-50';
      case 'medium': case 'intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'hard': case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-xl shadow-lg">
                <FaBrain className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Aptitude & CS Fundamentals</h1>
                <p className="text-gray-500 text-sm mt-1">Master the essentials for placement success</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium"
            >
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-5 shadow-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Current Streak</p>
                <p className="text-3xl font-bold">{streak} Days</p>
              </div>
              <FaFire className="text-5xl opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-5 shadow-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Total Points</p>
                <p className="text-3xl font-bold">{totalPoints.toLocaleString()}</p>
              </div>
              <FaTrophy className="text-5xl opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-5 shadow-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Overall Progress</p>
                <p className="text-3xl font-bold">68%</p>
              </div>
              <FaChartLine className="text-5xl opacity-80" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {(['quizzes', 'concepts', 'companies', 'tips'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab === 'quizzes' && <FaQuestionCircle />}
                {tab === 'concepts' && <FaGraduationCap />}
                {tab === 'companies' && <FaBuilding />}
                {tab === 'tips' && <FaLightbulb />}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {selectedTab === 'quizzes' && (
          <div className="space-y-4">
            {quizCategories.map((category) => {
              const progress = (category.completedQuestions / category.questionsCount) * 100;
              return (
                <div key={category.id} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4 flex-grow">
                      <div className={`${category.gradient} p-4 rounded-xl shadow-lg text-white text-3xl`}>
                        {category.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(category.difficulty)}`}>
                            {category.difficulty}
                          </span>
                          <span className="flex items-center space-x-1 text-sm text-gray-600">
                            <FaClock />
                            <span>{category.timePerQuiz}</span>
                          </span>
                          <span className="text-sm text-gray-600">
                            {category.completedQuestions}/{category.questionsCount} Questions
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full transition-all duration-500 bg-gradient-to-r ${category.color}`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium">
                      <FaPlay />
                      <span>Start Quiz</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {selectedTab === 'concepts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conceptCards.map((card) => (
              <div key={card.id} className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${card.color} rounded-xl shadow-lg text-white text-2xl`}>
                      {card.icon}
                    </div>
                    {card.learned && (
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                        <FaCheck />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{card.subject}</h3>
                  <p className="text-sm text-gray-600 mb-3">{card.topic}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{card.cardsCount} Cards</span>
                    <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      card.learned
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg'
                    }`}>
                      {card.learned ? 'Review' : 'Learn'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'companies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyQuestions.map((company, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{company.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{company.company}</h3>
                      <p className="text-xs text-gray-500">Updated {company.lastUpdated}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Questions</span>
                    <span className="font-bold text-indigo-600">{company.questionsCount}</span>
                  </div>
                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(company.difficulty)}`}>
                    {company.difficulty}
                  </span>
                  <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                    Practice Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'tips' && (
          <div className="space-y-4">
            {tips.map((tipCategory, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${tipCategory.color} rounded-xl shadow-lg text-white text-2xl`}>
                    {tipCategory.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{tipCategory.category}</h3>
                </div>
                <ul className="space-y-3">
                  {tipCategory.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg hover:shadow-md transition-all duration-200">
                      <FaStar className={`text-yellow-500 mt-1 flex-shrink-0`} />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}