import Link from 'next/link';

// Sample workflow data - in a real app, this would come from an API
const workflows = [
  {
    id: 1,
    title: 'Course Content Generation',
    description: 'Automatically generate course content using AI models via MCP.',
    tags: ['AI', 'Content', 'MCP'],
    complexity: 'Medium',
  },
  {
    id: 2,
    title: 'Student Progress Tracking',
    description: 'Track student progress and send personalized recommendations.',
    tags: ['Analytics', 'Email', 'Automation'],
    complexity: 'Low',
  },
  {
    id: 3,
    title: 'Resource Compilation',
    description: 'Compile learning resources from various APIs based on course topic.',
    tags: ['API', 'Data', 'Content'],
    complexity: 'Medium',
  },
  {
    id: 4,
    title: 'Certification Generator',
    description: 'Generate and email certificates upon course completion.',
    tags: ['PDF', 'Email', 'Automation'],
    complexity: 'Low',
  },
  {
    id: 5,
    title: 'AI Tutor Integration',
    description: 'Connect with AI tutors to answer student questions in real-time.',
    tags: ['AI', 'MCP', 'Chat'],
    complexity: 'High',
  },
  {
    id: 6,
    title: 'Course Analytics Dashboard',
    description: 'Collect and visualize course engagement and completion data.',
    tags: ['Analytics', 'Dashboard', 'Data'],
    complexity: 'High',
  },
];

export default function WorkflowsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Automation Workflows</h1>
        <Link
          href="#"
          className="btn-primary"
        >
          Create New Workflow
        </Link>
      </div>
      
      <p className="text-lg mb-8">
        EduAutomation uses n8n-inspired workflows to automate educational processes. Browse our templates below or create your own.
      </p>
      
      {/* Workflow grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="card relative">
            <div className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full text-white ${
              workflow.complexity === 'Low' ? 'bg-green-500' : 
              workflow.complexity === 'Medium' ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}>
              {workflow.complexity}
            </div>
            
            <h2 className="text-xl font-bold mb-2">{workflow.title}</h2>
            <p className="text-gray-600 mb-4">{workflow.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {workflow.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Link
                href={`/workflows/${workflow.id}`}
                className="text-primary hover:underline text-sm"
              >
                View Details
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="#"
                className="text-primary hover:underline text-sm"
              >
                Clone & Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* How It Works Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How Workflows Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">1</div>
            <h3 className="text-lg font-bold mb-2">Select a Template</h3>
            <p className="text-gray-600">Choose from our pre-built workflows or start from scratch.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">2</div>
            <h3 className="text-lg font-bold mb-2">Customize</h3>
            <p className="text-gray-600">Configure the workflow to meet your specific educational needs.</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">3</div>
            <h3 className="text-lg font-bold mb-2">Activate & Monitor</h3>
            <p className="text-gray-600">Turn on your workflow and track its performance in real-time.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/docs/workflows"
            className="text-primary hover:underline"
          >
            Learn more about n8n workflows →
          </Link>
        </div>
      </div>
    </div>
  );
} 