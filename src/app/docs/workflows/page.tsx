'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WorkflowsDocumentationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Workflow Documentation</h1>
        <Link href="/workflows" className="text-primary hover:underline">
          ← Back to Workflows
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b dark:border-gray-700">Documentation</h2>
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'overview' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('getting-started')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'getting-started' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                Getting Started
              </button>
              <button 
                onClick={() => setActiveTab('workflow-components')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'workflow-components' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                Workflow Components
              </button>
              <button 
                onClick={() => setActiveTab('integrations')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'integrations' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                Integrations
              </button>
              <button 
                onClick={() => setActiveTab('ai-models')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'ai-models' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                AI Model Integration
              </button>
              <button 
                onClick={() => setActiveTab('deployment')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'deployment' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                Deployment
              </button>
              <button 
                onClick={() => setActiveTab('faq')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'faq' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
              >
                FAQ
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {activeTab === 'overview' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Workflow Overview</h2>
                <p>
                  EduAutomation workflows are automation pipelines inspired by n8n that allow you to connect various
                  services and automate educational processes without writing code. Each workflow consists of nodes
                  (steps) that perform specific actions or transformations on data.
                </p>
                <p>
                  Workflows are designed to be flexible, reusable, and easy to customize for your specific educational needs.
                  Whether you're generating course content with AI, tracking student progress, or automating administrative
                  tasks, workflows can save you time and enhance the learning experience.
                </p>
                
                <h3>Key Features</h3>
                <ul>
                  <li><strong>Visual Builder</strong> - Create workflows using a drag-and-drop interface</li>
                  <li><strong>Extensive Integrations</strong> - Connect with LMS platforms, AI services, and more</li>
                  <li><strong>Conditional Logic</strong> - Create branching paths based on data conditions</li>
                  <li><strong>Scheduling</strong> - Run workflows on a schedule or trigger them based on events</li>
                  <li><strong>Error Handling</strong> - Define what happens when errors occur</li>
                  <li><strong>Monitoring</strong> - Track workflow execution and performance</li>
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md my-6">
                  <h4 className="text-blue-800 dark:text-blue-300 font-bold">Pro Tip</h4>
                  <p className="text-blue-800 dark:text-blue-300 mt-1">
                    Start with a template workflow and customize it to match your exact requirements.
                    This approach is faster than building workflows from scratch.
                  </p>
                </div>
                
                <h3>Use Cases</h3>
                <p>
                  Workflows can be used for a wide variety of educational automation tasks, including:
                </p>
                <ul>
                  <li>Generating and curating course content</li>
                  <li>Personalizing learning experiences based on student data</li>
                  <li>Automating assessments and feedback</li>
                  <li>Creating and distributing certificates</li>
                  <li>Collecting and analyzing learning analytics</li>
                  <li>Integrating AI tutors and assistants</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'getting-started' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Getting Started with Workflows</h2>
                <p>
                  Follow these steps to create and deploy your first workflow:
                </p>
                
                <h3>Step 1: Choose a Workflow</h3>
                <p>
                  You can start with one of our pre-built templates or create a new workflow from scratch.
                  To browse templates, go to the <Link href="/workflows" className="text-primary hover:underline">Workflows page</Link> and
                  explore the available options.
                </p>
                
                <h3>Step 2: Customize the Workflow</h3>
                <p>
                  Once you've chosen a workflow, you can customize it to match your needs:
                </p>
                <ul>
                  <li>Configure connection settings for external services</li>
                  <li>Adjust node parameters to change behavior</li>
                  <li>Add or remove nodes as needed</li>
                  <li>Set up conditional logic for branching paths</li>
                </ul>
                
                <h3>Step 3: Test the Workflow</h3>
                <p>
                  Before deploying your workflow to production, test it with sample data to ensure it works as expected.
                  You can use the "Test" button on any workflow to run it with test inputs.
                </p>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md my-6">
                  <h4 className="text-yellow-800 dark:text-yellow-300 font-bold">Important</h4>
                  <p className="text-yellow-800 dark:text-yellow-300 mt-1">
                    Always test workflows thoroughly before using them with real student data or
                    integrating them into your learning environment.
                  </p>
                </div>
                
                <h3>Step 4: Deploy the Workflow</h3>
                <p>
                  Once you're satisfied with your workflow, you can deploy it:
                </p>
                <ol>
                  <li>Click the "Deploy" button on the workflow detail page</li>
                  <li>Configure deployment settings (triggers, schedule, etc.)</li>
                  <li>Review and confirm deployment</li>
                </ol>
                
                <h3>Step 5: Monitor and Refine</h3>
                <p>
                  After deployment, monitor your workflow's performance and make adjustments as needed:
                </p>
                <ul>
                  <li>Check execution logs for errors or unexpected behavior</li>
                  <li>Monitor resource usage and performance metrics</li>
                  <li>Gather feedback from users and stakeholders</li>
                  <li>Iterate and improve based on real-world use</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'workflow-components' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Workflow Components</h2>
                <p>
                  Understanding the core components of workflows will help you create more effective
                  and efficient automation pipelines.
                </p>
                
                <h3>Nodes</h3>
                <p>
                  Nodes are the building blocks of workflows. Each node performs a specific function,
                  such as reading data from a source, transforming data, or sending data to a destination.
                </p>
                <p>Common node types include:</p>
                <ul>
                  <li><strong>Trigger Nodes</strong> - Start workflow execution based on events or schedules</li>
                  <li><strong>Action Nodes</strong> - Perform operations like reading/writing data or calling APIs</li>
                  <li><strong>Transform Nodes</strong> - Modify data structure or format</li>
                  <li><strong>Decision Nodes</strong> - Create conditional branches based on data values</li>
                  <li><strong>Integration Nodes</strong> - Connect with external services like AI models or LMS platforms</li>
                </ul>
                
                <h3>Connections</h3>
                <p>
                  Connections represent the flow of data between nodes. Data from one node's output
                  is passed to the next node's input through these connections.
                </p>
                <p>
                  You can connect nodes in various ways to create complex data flows:
                </p>
                <ul>
                  <li>Sequential connections (output → input)</li>
                  <li>Branching connections (one output → multiple inputs)</li>
                  <li>Merging connections (multiple outputs → one input)</li>
                </ul>
                
                <h3>Data Mapping</h3>
                <p>
                  Data mapping allows you to specify how data should flow between nodes. You can:
                </p>
                <ul>
                  <li>Select specific fields to pass to the next node</li>
                  <li>Rename fields for clarity or compatibility</li>
                  <li>Apply transformations or calculations</li>
                  <li>Set default values for missing data</li>
                </ul>
                
                <h3>Credentials</h3>
                <p>
                  Credentials are secure configurations that allow workflows to connect with external
                  services. We securely store API keys, tokens, and other sensitive information.
                </p>
                <p>
                  Always use credentials rather than hardcoding sensitive information in your workflows.
                </p>
              </div>
            )}
            
            {activeTab === 'integrations' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Workflow Integrations</h2>
                <p>
                  EduAutomation workflows can integrate with a wide range of external services and systems.
                  These integrations extend the capabilities of your workflows and allow you to connect
                  with your existing educational technology stack.
                </p>
                
                <h3>Available Integrations</h3>
                <p>Here are some of the key integration categories:</p>
                
                <h4>Learning Management Systems</h4>
                <ul>
                  <li>Canvas</li>
                  <li>Moodle</li>
                  <li>Blackboard</li>
                  <li>Google Classroom</li>
                  <li>Schoology</li>
                </ul>
                
                <h4>AI and Machine Learning</h4>
                <ul>
                  <li>OpenAI (GPT models)</li>
                  <li>Hugging Face</li>
                  <li>Google AI</li>
                  <li>Microsoft Azure AI</li>
                  <li>Anthropic</li>
                </ul>
                
                <h4>Content and Document Management</h4>
                <ul>
                  <li>Google Drive</li>
                  <li>Microsoft OneDrive</li>
                  <li>Dropbox</li>
                  <li>Box</li>
                  <li>SharePoint</li>
                </ul>
                
                <h4>Communication Channels</h4>
                <ul>
                  <li>Email (SMTP, Gmail, Outlook)</li>
                  <li>Slack</li>
                  <li>Microsoft Teams</li>
                  <li>SMS (Twilio)</li>
                  <li>WhatsApp</li>
                </ul>
                
                <h4>Analytics and Reporting</h4>
                <ul>
                  <li>Google Analytics</li>
                  <li>Mixpanel</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>Custom SQL Databases</li>
                </ul>
                
                <h3>Setting Up Integrations</h3>
                <p>
                  To set up an integration:
                </p>
                <ol>
                  <li>Navigate to the Credentials section in your account settings</li>
                  <li>Select the service you want to integrate with</li>
                  <li>Follow the prompts to authenticate with the service</li>
                  <li>Save the credential for use in your workflows</li>
                </ol>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md my-6">
                  <h4 className="text-green-800 dark:text-green-300 font-bold">Best Practice</h4>
                  <p className="text-green-800 dark:text-green-300 mt-1">
                    Create separate credentials for production and testing environments to avoid accidental
                    modifications to production data during workflow development.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'ai-models' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>AI Model Integration</h2>
                <p>
                  EduAutomation workflows can leverage various AI models to automate educational tasks,
                  generate content, and provide personalized learning experiences.
                </p>
                
                <h3>Model Context Protocol (MCP)</h3>
                <p>
                  Our Model Context Protocol (MCP) provides a standardized way to interact with different AI models.
                  This abstraction layer allows your workflows to:
                </p>
                <ul>
                  <li>Work with multiple AI providers through a consistent interface</li>
                  <li>Switch between models without rewriting your workflows</li>
                  <li>Combine multiple models in a single workflow</li>
                  <li>Handle context and history for conversational applications</li>
                </ul>
                
                <h3>Supported AI Capabilities</h3>
                <p>
                  Through MCP, your workflows can leverage these AI capabilities:
                </p>
                <ul>
                  <li><strong>Text Generation</strong> - Create course content, summaries, and explanations</li>
                  <li><strong>Content Transformation</strong> - Simplify text, translate content, change tone</li>
                  <li><strong>Question Answering</strong> - Power AI tutors and assistants</li>
                  <li><strong>Classification</strong> - Categorize student responses or content topics</li>
                  <li><strong>Sentiment Analysis</strong> - Gauge student engagement and satisfaction</li>
                  <li><strong>Image Generation</strong> - Create visual aids and illustrations</li>
                  <li><strong>Speech Recognition/Synthesis</strong> - Enable audio interactions</li>
                </ul>
                
                <h3>Implementing AI in Workflows</h3>
                <p>
                  To implement AI functionality in your workflows:
                </p>
                <ol>
                  <li>Add an MCP AI Node to your workflow</li>
                  <li>Select the AI capability you want to use</li>
                  <li>Configure model parameters and options</li>
                  <li>Connect your credential for the AI provider</li>
                  <li>Map inputs and outputs to other nodes in your workflow</li>
                </ol>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md my-6">
                  <h4 className="text-purple-800 dark:text-purple-300 font-bold">Example: Content Generation</h4>
                  <p className="text-purple-800 dark:text-purple-300 mt-1">
                    To generate course content, you could create a workflow that:
                    <br/>1. Takes a course topic and learning objectives as input
                    <br/>2. Uses an MCP AI Node to generate an outline
                    <br/>3. Sends the outline to another MCP AI Node to expand each section
                    <br/>4. Formats the generated content
                    <br/>5. Saves the content to your LMS or document storage
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'deployment' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Workflow Deployment</h2>
                <p>
                  Once you've created and tested your workflow, it's time to deploy it to your production environment.
                  This section covers the deployment process and best practices.
                </p>
                
                <h3>Deployment Options</h3>
                <p>
                  EduAutomation offers several ways to deploy your workflows:
                </p>
                <ul>
                  <li><strong>Triggered Deployment</strong> - Workflows that run in response to external events</li>
                  <li><strong>Scheduled Deployment</strong> - Workflows that run on a regular schedule</li>
                  <li><strong>Manual Deployment</strong> - Workflows that you run manually as needed</li>
                  <li><strong>API Deployment</strong> - Workflows that run when called via API</li>
                </ul>
                
                <h3>Deployment Process</h3>
                <p>
                  Follow these steps to deploy a workflow:
                </p>
                <ol>
                  <li>From the workflow detail page, click the "Deploy" button</li>
                  <li>Select your deployment option (triggered, scheduled, etc.)</li>
                  <li>Configure deployment-specific settings:
                    <ul>
                      <li>For triggered workflows: configure the trigger event</li>
                      <li>For scheduled workflows: set the schedule (frequency, time, etc.)</li>
                      <li>For API workflows: configure authentication and rate limits</li>
                    </ul>
                  </li>
                  <li>Review your deployment configuration</li>
                  <li>Confirm and deploy</li>
                </ol>
                
                <h3>Monitoring and Management</h3>
                <p>
                  After deployment, you can monitor and manage your workflows:
                </p>
                <ul>
                  <li><strong>Execution History</strong> - View details of past workflow runs</li>
                  <li><strong>Performance Metrics</strong> - Monitor execution time, resource usage, etc.</li>
                  <li><strong>Error Handling</strong> - Configure alerts and automatic retry logic</li>
                  <li><strong>Versioning</strong> - Track changes and roll back if needed</li>
                </ul>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md my-6">
                  <h4 className="text-red-800 dark:text-red-300 font-bold">Important Security Note</h4>
                  <p className="text-red-800 dark:text-red-300 mt-1">
                    Always review workflows for security implications before deployment. Ensure that:
                    <br/>1. Workflows only have the minimum permissions needed
                    <br/>2. Sensitive data is handled securely
                    <br/>3. Error handling does not expose sensitive information
                    <br/>4. Access to workflow execution is properly restricted
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'faq' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3>How many workflows can I create?</h3>
                    <p>
                      The number of workflows you can create depends on your subscription plan:
                    </p>
                    <ul>
                      <li><strong>Free Plan</strong>: Up to 3 active workflows</li>
                      <li><strong>Basic Plan</strong>: Up to 10 active workflows</li>
                      <li><strong>Professional Plan</strong>: Up to 50 active workflows</li>
                      <li><strong>Enterprise Plan</strong>: Unlimited workflows</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3>What happens if a workflow fails?</h3>
                    <p>
                      When a workflow fails, the system:
                    </p>
                    <ol>
                      <li>Records the error in the execution history</li>
                      <li>Sends notifications based on your alert settings</li>
                      <li>Attempts to retry the workflow based on your retry configuration</li>
                      <li>Preserves the state and data for debugging</li>
                    </ol>
                    <p>
                      You can configure custom error handling for each workflow to define specific actions
                      to take when errors occur.
                    </p>
                  </div>
                  
                  <div>
                    <h3>Can I share workflows with others?</h3>
                    <p>
                      Yes, you can share workflows with other users in your organization:
                    </p>
                    <ul>
                      <li>Use the "Share" button on the workflow detail page</li>
                      <li>Select users or teams to share with</li>
                      <li>Choose permission levels (view, edit, execute, or manage)</li>
                      <li>Optionally send a notification email</li>
                    </ul>
                    <p>
                      You can also export workflows as JSON files to share them outside your organization.
                    </p>
                  </div>
                  
                  <div>
                    <h3>How are AI usage credits calculated?</h3>
                    <p>
                      AI usage credits are calculated based on:
                    </p>
                    <ul>
                      <li>The specific AI model used</li>
                      <li>The number of tokens or API calls</li>
                      <li>The complexity of the request</li>
                    </ul>
                    <p>
                      Each workflow execution using AI will show the credits consumed in the execution
                      history. You can set limits on credit usage per workflow to control costs.
                    </p>
                  </div>
                  
                  <div>
                    <h3>Can I integrate custom services or APIs?</h3>
                    <p>
                      Yes, you can integrate custom services or APIs using:
                    </p>
                    <ul>
                      <li><strong>HTTP Request Nodes</strong> - For RESTful API integration</li>
                      <li><strong>Webhook Nodes</strong> - For receiving data from external services</li>
                      <li><strong>Custom Integration Nodes</strong> - For specialized integrations</li>
                      <li><strong>Code Nodes</strong> - For running custom JavaScript or Python code</li>
                    </ul>
                    <p>
                      If you need help with a specific integration, contact our support team.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md my-6">
                  <h4 className="text-blue-800 dark:text-blue-300 font-bold">Still Have Questions?</h4>
                  <p className="text-blue-800 dark:text-blue-300 mt-1">
                    If you don't see your question answered here, please contact our support team at
                    support@eduautomation.com or visit our community forum.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 