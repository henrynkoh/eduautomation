'use client';

import { useState } from 'react';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface EnrollmentConfirmationProps {
  courseTitle: string;
  isPaid: boolean;
  enrollmentData: {
    welcomeMessage: string;
    learningPlan: string;
    estimatedCompletionTime: string;
    nextSteps: string[];
  };
  onClose: () => void;
}

export default function EnrollmentConfirmation({
  courseTitle,
  isPaid,
  enrollmentData,
  onClose
}: EnrollmentConfirmationProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const planText = `
My Learning Plan for ${courseTitle}
--------------------------------
${enrollmentData.learningPlan}

Estimated completion time: ${enrollmentData.estimatedCompletionTime}

Next Steps:
${enrollmentData.nextSteps.map((step, index) => `${index + 1}. ${step}`).join('\n')}
    `;
    
    navigator.clipboard.writeText(planText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <h2 className="text-2xl font-bold">Enrollment Successful!</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Welcome message */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-lg">{enrollmentData.welcomeMessage}</p>
          </div>
          
          {/* Access type */}
          <div className="flex items-center space-x-2">
            <div className={`px-3 py-1 rounded text-sm font-medium ${
              isPaid 
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {isPaid ? 'Full Access' : 'Limited Access'}
            </div>
            <span className="text-gray-600 dark:text-gray-400">{enrollmentData.estimatedCompletionTime}</span>
          </div>
          
          {/* Learning plan */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Your AI-Generated Learning Plan</h3>
            <p className="mb-4">{enrollmentData.learningPlan}</p>
            
            <button 
              onClick={copyToClipboard}
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              {copied ? 'Copied!' : 'Copy learning plan to clipboard'}
              {!copied && <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>}
            </button>
          </div>
          
          {/* Next steps */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
            <ul className="space-y-2">
              {enrollmentData.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button 
              onClick={onClose}
              className="btn-primary flex-1"
            >
              Start Learning Now
            </button>
            {!isPaid && (
              <button className="btn-secondary flex-1">
                Upgrade to Full Access
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 