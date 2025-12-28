// app/gpt/page.tsx

"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaRobot, FaUser, FaPaperPlane, FaLightbulb, FaCode, FaBriefcase, FaGraduationCap, FaTrash, FaDownload, FaCopy, FaCheck } from 'react-icons/fa';

interface Message {
  id: string;
  sender: 'user' | 'gpt';
  text: string;
  timestamp: Date;
}

interface Suggestion {
  icon: React.ReactNode;
  text: string;
  gradient: string;
}

export default function GPTPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions: Suggestion[] = [
    { icon: <FaCode />, text: "Explain Dynamic Programming concepts", gradient: "from-blue-500 to-purple-600" },
    { icon: <FaBriefcase />, text: "Mock interview questions for FAANG", gradient: "from-green-500 to-teal-600" },
    { icon: <FaGraduationCap />, text: "Best resources for Data Structures", gradient: "from-orange-500 to-red-600" },
    { icon: <FaLightbulb />, text: "Tips for system design interviews", gradient: "from-pink-500 to-rose-600" },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (messageText === '') return;

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date(),
    };

    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI typing with variable delay
    const responseDelay = 1200 + Math.random() * 800;
    setTimeout(() => {
      const aiResponse: Message = {
        id: `gpt-${Date.now()}`,
        sender: 'gpt',
        text: `Based on your question about "${messageText}", here's a comprehensive answer:\n\nFor mastering this topic, I recommend:\n\n1. **Foundation Building**: Start with the core concepts and build a strong theoretical understanding.\n\n2. **Practical Application**: Practice coding problems on platforms like LeetCode, HackerRank, and CodeForces.\n\n3. **Pattern Recognition**: Learn to identify common patterns that frequently appear in interviews.\n\n4. **Time Complexity**: Always analyze and optimize your solutions for better performance.\n\nWould you like me to dive deeper into any specific aspect?`,
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsTyping(false);
    }, responseDelay);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const clearChat = () => {
    if (window.confirm('Are you sure you want to clear all messages?')) {
      setMessages([]);
    }
  };

  const exportChat = () => {
    const chatText = messages.map(msg => 
      `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender === 'user' ? 'You' : 'Placement GPT'}: ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `placement-gpt-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-4 md:p-8 flex flex-col">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto mb-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
              <FaRobot className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Placement GPT</h1>
              <p className="text-sm text-gray-500">Your AI Interview Preparation Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {messages.length > 0 && (
              <>
                <button
                  onClick={exportChat}
                  className="p-2.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  title="Export chat"
                >
                  <FaDownload />
                </button>
                <button
                  onClick={clearChat}
                  className="p-2.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  title="Clear chat"
                >
                  <FaTrash />
                </button>
              </>
            )}
            <Link 
              href="/" 
              className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium"
            >
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Chat Container */}
      <main className="flex-grow w-full max-w-6xl mx-auto flex flex-col">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col h-[calc(100vh-200px)] overflow-hidden">
          
          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-8 p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <FaRobot className="relative text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600" />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-gray-800">Welcome to Placement GPT!</h2>
                  <p className="text-gray-600 max-w-md">Ask me anything about placements, interviews, coding problems, or career guidance.</p>
                </div>
                
                {/* Suggestions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-8">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="group relative p-5 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${suggestion.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      <div className="relative flex items-center space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${suggestion.gradient} rounded-lg text-white shadow-lg`}>
                          {suggestion.icon}
                        </div>
                        <span className="text-left text-gray-700 font-medium flex-grow">{suggestion.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} animate-fadeIn`}
                  >
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-gray-600 to-gray-800' 
                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                    }`}>
                      {msg.sender === 'user' ? <FaUser className="text-white" /> : <FaRobot className="text-white" />}
                    </div>

                    {/* Message Bubble */}
                    <div className={`flex flex-col max-w-[75%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`relative group p-4 rounded-2xl shadow-md ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-none'
                          : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                      }`}>
                        <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                        
                        {/* Copy button */}
                        {msg.sender === 'gpt' && (
                          <button
                            onClick={() => copyMessage(msg.text, msg.id)}
                            className="absolute -right-2 -top-2 p-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 border border-gray-200"
                            title="Copy message"
                          >
                            {copiedId === msg.id ? (
                              <FaCheck className="text-green-500 text-xs" />
                            ) : (
                              <FaCopy className="text-gray-600 text-xs" />
                            )}
                          </button>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 mt-1 px-2">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-3 animate-fadeIn">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <FaRobot className="text-white" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-100">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 md:p-6 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3 max-w-4xl mx-auto">
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask anything about placements, interviews, or coding..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={() => handleSend()}
                disabled={isTyping || input.trim() === ''}
                className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 group"
              >
                <FaPaperPlane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}