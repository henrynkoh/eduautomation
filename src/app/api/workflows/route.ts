import { NextResponse } from 'next/server';

// Sample workflow data - in a real app, this would connect to n8n
const workflows = [
  {
    id: 1,
    name: 'Course Content Generation',
    description: 'Automatically generate course content using AI models via MCP.',
    tags: ['AI', 'Content', 'MCP'],
    complexity: 'Medium',
    lastRun: '2023-05-01T12:00:00Z',
    status: 'active',
  },
  {
    id: 2,
    name: 'Student Progress Tracking',
    description: 'Track student progress and send personalized recommendations.',
    tags: ['Analytics', 'Email', 'Automation'],
    complexity: 'Low',
    lastRun: '2023-05-10T09:30:00Z',
    status: 'active',
  },
  {
    id: 3,
    name: 'Resource Compilation',
    description: 'Compile learning resources from various APIs based on course topic.',
    tags: ['API', 'Data', 'Content'],
    complexity: 'Medium',
    lastRun: '2023-05-05T14:15:00Z',
    status: 'active',
  },
  {
    id: 4,
    name: 'Certification Generator',
    description: 'Generate and email certificates upon course completion.',
    tags: ['PDF', 'Email', 'Automation'],
    complexity: 'Low',
    lastRun: '2023-05-08T11:20:00Z',
    status: 'inactive',
  },
  {
    id: 5,
    name: 'AI Tutor Integration',
    description: 'Connect with AI tutors to answer student questions in real-time.',
    tags: ['AI', 'MCP', 'Chat'],
    complexity: 'High',
    lastRun: '2023-05-03T10:45:00Z',
    status: 'active',
  },
  {
    id: 6,
    name: 'Course Analytics Dashboard',
    description: 'Collect and visualize course engagement and completion data.',
    tags: ['Analytics', 'Dashboard', 'Data'],
    complexity: 'High',
    lastRun: '2023-05-09T08:00:00Z',
    status: 'inactive',
  },
];

export async function GET() {
  return NextResponse.json(workflows);
}

export async function POST(request: Request) {
  try {
    const workflow = await request.json();
    
    // In a real application, we would integrate with n8n API to create a workflow
    // For simplicity, we're just returning the workflow with a new ID
    
    const newWorkflow = {
      ...workflow,
      id: workflows.length + 1,
      lastRun: new Date().toISOString(),
      status: 'active',
    };
    
    return NextResponse.json(newWorkflow, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create workflow' },
      { status: 400 }
    );
  }
} 