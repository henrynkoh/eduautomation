import { NextResponse } from 'next/server';

// Sample course data - in a real application, this would come from a database
const courses = [
  {
    id: '1',
    title: 'Docker Fundamentals',
    description: 'Learn the basics of containerization with Docker, from images to deployment.',
    level: 'Beginner',
    duration: '4 weeks',
    image: '/images/docker-course.jpg',
    instructor: 'Alex Chen',
    modules: [
      { title: 'Introduction to Containers', duration: '45 min' },
      { title: 'Docker Architecture', duration: '1 hour' },
      { title: 'Creating Your First Container', duration: '1.5 hours' },
      { title: 'Docker Compose', duration: '2 hours' },
      { title: 'Docker in Production', duration: '1.5 hours' },
    ],
  },
  {
    id: '2',
    title: 'n8n Workflow Automation',
    description: 'Master the art of no-code automation with n8n to streamline your processes.',
    level: 'Intermediate',
    duration: '3 weeks',
    image: '/images/n8n-course.jpg',
    instructor: 'Sarah Johnson',
    modules: [
      { title: 'Introduction to n8n', duration: '1 hour' },
      { title: 'Creating Basic Workflows', duration: '1.5 hours' },
      { title: 'Working with APIs', duration: '2 hours' },
      { title: 'Advanced Automation', duration: '2.5 hours' },
      { title: 'Integration with Docker', duration: '1 hour' },
    ],
  },
  {
    id: '3',
    title: 'AI Integration with MCP',
    description: 'Discover how to integrate AI models using the Model Context Protocol.',
    level: 'Advanced',
    duration: '6 weeks',
    image: '/images/mcp-course.jpg',
    instructor: 'Michael Lee',
    modules: [
      { title: 'Understanding MCP', duration: '1 hour' },
      { title: 'AI Model Basics', duration: '2 hours' },
      { title: 'Integrating OpenAI', duration: '2 hours' },
      { title: 'MCP with Custom Models', duration: '3 hours' },
      { title: 'Building AI Workflows', duration: '2.5 hours' },
    ],
  },
  {
    id: '4',
    title: 'Full-Stack Education Platform',
    description: 'Build your own education platform with Next.js, Docker, and AI integration.',
    level: 'Advanced',
    duration: '8 weeks',
    image: '/images/fullstack-course.jpg',
    instructor: 'Jessica Williams',
    modules: [
      { title: 'Project Setup with Next.js', duration: '1.5 hours' },
      { title: 'Authentication and User Management', duration: '2 hours' },
      { title: 'Containerization with Docker', duration: '2 hours' },
      { title: 'Workflow Automation', duration: '2.5 hours' },
      { title: 'AI Content Generation', duration: '3 hours' },
    ],
  },
];

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  try {
    const course = await request.json();
    
    // In a real application, we would validate the course data and save it to a database
    // For simplicity, we're just returning the course with a new ID
    
    const newCourse = {
      ...course,
      id: (courses.length + 1).toString(),
    };
    
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 400 }
    );
  }
} 