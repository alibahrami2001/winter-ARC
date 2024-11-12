import React, { useState } from 'react';
import { Header } from './components/Header';
import { ChallengeCard } from './components/ChallengeCard';
import { Calendar, Target, Brain, Snowflake, ArrowRight, Code } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const challenges = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "30-Day Fitness Goal",
      description: "Complete daily winter workouts and track your progress",
      progress: 65
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mindfulness Journey",
      description: "Practice daily meditation and reflection",
      progress: 45
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Learning Sprint",
      description: "Master a new skill during the winter months",
      progress: 30
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="relative">
            <Snowflake className="h-12 w-12 text-blue-500 dark:text-blue-400 mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Transform Your Winter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Join the Winter ARC Challenge and turn the coldest season into your most productive time for self-improvement.
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center gap-2">
                Join Challenge
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section id="challenges" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Active Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </section>

        {/* Progress Section */}
        <section id="progress" className="mb-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-blue-50 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Your Journey</h2>
            <div className="relative h-64 bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-blue-600 dark:text-blue-400">Progress visualization coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Daily Reflection</h2>
            <textarea
              className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="What did you learn today?"
              rows={4}
            />
            <button className="mt-4 px-6 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
              Save Reflection
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-blue-50 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">© 2024 Winter ARC Challenge. Transform your winter, transform your life.</p>
          <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
            <Code className="h-4 w-4" />
            <p className="text-sm">
              Developed with ❄️ by <span className="font-semibold">Ali Bahrami</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;