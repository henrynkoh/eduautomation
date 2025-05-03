'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Sample workflow data - in a real app, this would come from an API
const workflows = [
  {
    id: 1,
    title: 'Course Content Generation',
    description: 'Automatically generate course content using AI models via MCP.',
    detailedDescription: 'This workflow connects to various AI models through the Model Context Protocol (MCP) to generate comprehensive course materials based on a topic and learning objectives. It can create module outlines, lecture notes, quiz questions, and practical exercises.',
    tags: ['AI', 'Content', 'MCP'],
    complexity: 'Medium',
    steps: [
      { 
        title: 'Topic Analysis', 
        description: 'The workflow begins by analyzing the course topic to identify key concepts and learning outcomes.' 
      },
      { 
        title: 'Content Structure Planning', 
        description: 'Based on the analysis, the workflow creates a structured outline for the course content.' 
      },
      { 
        title: 'AI Content Generation', 
        description: 'Using MCP, the workflow connects to appropriate AI models to generate detailed content for each section.' 
      },
      { 
        title: 'Quality Assurance', 
        description: 'Generated content is checked for accuracy, coherence, and educational value.' 
      },
      { 
        title: 'Formatting and Export', 
        description: 'Content is formatted according to your preferences and exported to your desired platform.' 
      }
    ],
    integrations: ['OpenAI API', 'Google Docs', 'Course Repository'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2023-12-10',
  },
  {
    id: 2,
    title: 'Student Progress Tracking',
    description: 'Track student progress and send personalized recommendations.',
    detailedDescription: 'This workflow automatically monitors student engagement with course materials, analyzes their progress and performance, and sends personalized recommendations to help them succeed. It can identify students at risk of falling behind and provide targeted interventions.',
    tags: ['Analytics', 'Email', 'Automation'],
    complexity: 'Low',
    steps: [
      { 
        title: 'Data Collection', 
        description: 'The workflow collects data on student interactions with course materials, assessments, and activities.' 
      },
      { 
        title: 'Progress Analysis', 
        description: 'Data is analyzed to determine each student\'s progress, strengths, and areas for improvement.' 
      },
      { 
        title: 'Personalization', 
        description: 'Based on the analysis, personalized recommendations are generated for each student.' 
      },
      { 
        title: 'Notification', 
        description: 'Students receive personalized recommendations via their preferred communication channel.' 
      },
      { 
        title: 'Instructor Dashboard', 
        description: 'Instructors receive aggregated data on student progress and the effectiveness of recommendations.' 
      }
    ],
    integrations: ['Learning Management System', 'Email Service', 'Analytics Platform'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2024-02-15',
  },
  {
    id: 3,
    title: 'Resource Compilation',
    description: 'Compile learning resources from various APIs based on course topic.',
    detailedDescription: 'This workflow searches and aggregates learning resources from multiple sources including academic databases, open educational resources, and multimedia repositories based on the course topic. It then organizes these resources into a comprehensive library for students.',
    tags: ['API', 'Data', 'Content'],
    complexity: 'Medium',
    steps: [
      { 
        title: 'Topic Analysis', 
        description: 'The workflow analyzes the course topic to generate relevant search queries.' 
      },
      { 
        title: 'Resource Discovery', 
        description: 'Using the search queries, the workflow searches multiple repositories and APIs for relevant resources.' 
      },
      { 
        title: 'Quality Filtering', 
        description: 'Resources are filtered based on credibility, relevance, and educational value.' 
      },
      { 
        title: 'Organization', 
        description: 'Selected resources are organized by type, difficulty level, and relevance to specific course modules.' 
      },
      { 
        title: 'Export and Integration', 
        description: 'The compiled resources are integrated into your course platform and updated regularly.' 
      }
    ],
    integrations: ['Academic APIs', 'Open Educational Resources', 'YouTube API'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2024-01-22',
  },
  {
    id: 4,
    title: 'Certification Generator',
    description: 'Generate and email certificates upon course completion.',
    detailedDescription: 'This workflow automatically creates personalized certificates when students complete a course or achieve specific milestones. The certificates can be customized with the student\'s name, course details, date of completion, and instructor signature, then delivered via email.',
    tags: ['PDF', 'Email', 'Automation'],
    complexity: 'Low',
    steps: [
      { 
        title: 'Completion Verification', 
        description: 'The workflow verifies that a student has met all requirements for course completion.' 
      },
      { 
        title: 'Certificate Generation', 
        description: 'Using a customizable template, a personalized certificate is generated with student and course details.' 
      },
      { 
        title: 'Digital Signing', 
        description: 'The certificate is digitally signed for authenticity and security.' 
      },
      { 
        title: 'Delivery', 
        description: 'The certificate is emailed to the student and stored in their profile.' 
      },
      { 
        title: 'Verification System', 
        description: 'A unique verification code is added to the certificate for employers to validate authenticity.' 
      }
    ],
    integrations: ['PDF Generator API', 'Email Service', 'Digital Signature Service'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2023-11-05',
  },
  {
    id: 5,
    title: 'AI Tutor Integration',
    description: 'Connect with AI tutors to answer student questions in real-time.',
    detailedDescription: 'This workflow integrates AI tutoring capabilities into your learning platform, allowing students to receive immediate help with concepts they find challenging. The AI tutor can answer questions, provide explanations, give examples, and guide students through problem-solving steps.',
    tags: ['AI', 'MCP', 'Chat'],
    complexity: 'High',
    steps: [
      { 
        title: 'Question Analysis', 
        description: 'The workflow analyzes the student\'s question to understand the topic and learning context.' 
      },
      { 
        title: 'Model Selection', 
        description: 'Based on the analysis, the appropriate AI model is selected via MCP to answer the question.' 
      },
      { 
        title: 'Response Generation', 
        description: 'The AI generates a helpful, accurate response tailored to the student\'s learning level.' 
      },
      { 
        title: 'Resource Suggestion', 
        description: 'Relevant course materials and additional resources are suggested to supplement the answer.' 
      },
      { 
        title: 'Learning Record', 
        description: 'The interaction is recorded to track common questions and improve course materials.' 
      }
    ],
    integrations: ['OpenAI API', 'Chat Interface', 'Course Content API'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2024-03-01',
  },
  {
    id: 6,
    title: 'Course Analytics Dashboard',
    description: 'Collect and visualize course engagement and completion data.',
    detailedDescription: 'This workflow gathers data on student engagement, progress, and outcomes, then visualizes it in a comprehensive dashboard. Instructors can identify trends, compare cohorts, and make data-driven decisions to improve course effectiveness.',
    tags: ['Analytics', 'Dashboard', 'Data'],
    complexity: 'High',
    steps: [
      { 
        title: 'Data Collection', 
        description: 'The workflow collects data from multiple sources including course platform, assessments, and student feedback.' 
      },
      { 
        title: 'Data Processing', 
        description: 'Raw data is processed, cleaned, and structured for analysis.' 
      },
      { 
        title: 'Metrics Calculation', 
        description: 'Key performance indicators and educational metrics are calculated from the processed data.' 
      },
      { 
        title: 'Visualization', 
        description: 'Data is visualized through intuitive charts, graphs, and tables.' 
      },
      { 
        title: 'Insight Generation', 
        description: 'The workflow automatically identifies notable trends, patterns, and actionable insights.' 
      }
    ],
    integrations: ['Analytics Platform', 'Data Visualization Tools', 'Learning Management System'],
    createdBy: 'EduAutomation Team',
    lastUpdated: '2024-01-15',
  },
];

export default function WorkflowDetailPage({ params }: { params: { id: string } }) {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null);
  const router = useRouter();
  
  const workflowId = parseInt(params.id);
  const workflow = workflows.find(w => w.id === workflowId);
  
  if (!workflow) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Workflow Not Found</h1>
        <p className="mb-6">The workflow you're looking for doesn't exist.</p>
        <Link href="/workflows" className="btn-primary">
          Back to Workflows
        </Link>
      </div>
    );
  }
  
  const handleDeployClick = async () => {
    setIsDeploying(true);
    setDeploymentStatus('Initializing deployment...');
    
    // Simulate deployment steps with delays
    await new Promise(resolve => setTimeout(resolve, 800));
    setDeploymentStatus('Validating workflow configuration...');
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    setDeploymentStatus('Setting up integrations...');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDeploymentStatus('Deploying workflow...');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDeploymentStatus('Workflow deployed successfully! Redirecting to dashboard...');
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    router.push('/workflows');
  };
  
  return (
    <div>
      <Link href="/workflows" className="text-primary hover:underline inline-block mb-6">
        ← Back to Workflows
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{workflow.title}</h1>
            <span className={`text-sm px-3 py-1 rounded-full text-white ${
              workflow.complexity === 'Low' ? 'bg-green-500' : 
              workflow.complexity === 'Medium' ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}>
              {workflow.complexity} Complexity
            </span>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {workflow.detailedDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {workflow.tags.map((tag, index) => (
              <span key={index} className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Created By</h3>
              <p>{workflow.createdBy}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Last Updated</h3>
              <p>{workflow.lastUpdated}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={handleDeployClick}
              disabled={isDeploying}
              className="btn-primary flex items-center disabled:opacity-70"
            >
              {isDeploying ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deploying...
                </>
              ) : (
                'Deploy Workflow'
              )}
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              Clone & Customize
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              Export JSON
            </button>
          </div>
          
          {deploymentStatus && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md">
              {deploymentStatus}
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Workflow Steps</h2>
            <div className="space-y-6">
              {workflow.steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                      {index + 1}
                    </div>
                    {index < workflow.steps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mx-auto my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Implementation Notes</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>This workflow is designed to be easy to implement with minimal configuration. Follow these steps to get started:</p>
              
              <ol className="list-decimal pl-5 space-y-2 mt-4">
                <li>Deploy the workflow using the button above</li>
                <li>Configure your API credentials for the required integrations</li>
                <li>Customize the workflow parameters to match your specific needs</li>
                <li>Test the workflow with sample data before using it in production</li>
                <li>Monitor performance and adjust as necessary</li>
              </ol>
              
              <p className="mt-4">For more detailed implementation instructions, refer to our <a href="/docs/workflows" className="text-primary hover:underline">documentation</a>.</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Integrations</h2>
            <ul className="space-y-3">
              {workflow.integrations.map((integration, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {integration}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our team is available to help you implement and customize this workflow for your specific needs.
            </p>
            <div className="space-y-3">
              <a 
                href="/docs/workflows" 
                className="flex items-center text-primary hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                View Documentation
              </a>
              <a 
                href="/support" 
                className="flex items-center text-primary hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Support
              </a>
              <a 
                href="/community" 
                className="flex items-center text-primary hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Join Community Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 