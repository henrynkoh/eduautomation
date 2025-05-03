'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface ModuleDetailProps {
  moduleTitle: string;
  courseTitle: string;
  level: string;
  duration: string;
}

interface ModuleContent {
  overview: string;
  keyPoints: string[];
  resources: { title: string; url: string; type: string }[];
  activities: { title: string; description: string; duration: string }[];
}

export default function ModuleDetail({ moduleTitle, courseTitle, level, duration }: ModuleDetailProps) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<ModuleContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch module content when expanded
  useEffect(() => {
    if (expanded && !content && !loading) {
      fetchModuleContent();
    }
  }, [expanded]);

  const fetchModuleContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/ai/generate-module', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          moduleTitle,
          courseTitle,
          level,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch module content');
      }

      const data = await response.json();
      setContent(data.moduleContent);
    } catch (err) {
      console.error('Error fetching module content:', err);
      setError('Failed to load module content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border rounded-lg overflow-hidden transition-all duration-300 mb-4 hover:shadow-md">
      {/* Module header - always visible */}
      <div 
        className={`p-4 flex justify-between items-center cursor-pointer transition-colors ${expanded ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
        onClick={toggleExpanded}
      >
        <div className="flex-1">
          <h3 className="font-medium hover-text">{moduleTitle}</h3>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 hover-text mr-4">{duration}</span>
          <button className="text-gray-600 hover:text-primary">
            {expanded ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Module content - visible when expanded */}
      {expanded && (
        <div className="p-4 bg-white dark:bg-gray-900 border-t">
          {loading ? (
            <div className="py-8 flex justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-md mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-md mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 max-w-md"></div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="py-4 text-center text-red-500">{error}</div>
          ) : content ? (
            <div className="space-y-6">
              {/* Overview section */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <p className="text-gray-700 dark:text-gray-300">{content.overview}</p>
              </div>
              
              {/* Key points section */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Key Points</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {content.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{point}</li>
                  ))}
                </ul>
              </div>
              
              {/* Resources section */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Resources</h4>
                <div className="space-y-2">
                  {content.resources.map((resource, index) => (
                    <div key={index} className="flex items-start">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 w-24 text-center">
                        {resource.type}
                      </span>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline"
                      >
                        {resource.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Activities section */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Activities</h4>
                <div className="space-y-3">
                  {content.activities.map((activity, index) => (
                    <div key={index} className="border p-3 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="font-medium">{activity.title}</h5>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{activity.duration}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
} 