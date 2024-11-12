import React from 'react';
import { Mountain, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 sticky top-0 z-50 border-b border-blue-50 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mountain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Winter ARC
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#challenges" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Challenges</a>
          <a href="#progress" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Progress</a>
          <a href="#reflection" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Reflection</a>
        </nav>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}