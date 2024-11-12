import React from 'react';
import { Calendar, Target, Brain, Snowflake } from 'lucide-react';

type Challenge = {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
};

export function ChallengeCard({ icon, title, description, progress }: Challenge) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{progress}% Complete</p>
    </div>
  );
}