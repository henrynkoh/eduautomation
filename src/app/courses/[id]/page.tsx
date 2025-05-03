'use client';

import Link from 'next/link';
import { useState } from 'react';
import CourseImage from '@/components/CourseImage';
import ModuleDetail from '@/components/ModuleDetail';
import EnrollmentConfirmation from '@/components/EnrollmentConfirmation';

// Sample courses data - in a real app, this would come from an API
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

// In a real application, this data would be fetched server-side
export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === params.id);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollmentResult, setEnrollmentResult] = useState<{
    success: boolean;
    message: string;
    enrollmentData: any;
    accessType: string;
  } | null>(null);
  
  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-6">The course you're looking for doesn't exist.</p>
        <Link href="/courses" className="btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }
  
  const enrollInCourse = async (isPaid: boolean) => {
    try {
      setIsEnrolling(true);
      
      const response = await fetch('/api/ai/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          level: course.level,
          isPaid
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to enroll in course');
      }
      
      const result = await response.json();
      setEnrollmentResult(result);
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in course. Please try again later.');
    } finally {
      setIsEnrolling(false);
    }
  };
  
  return (
    <div>
      {enrollmentResult && enrollmentResult.success && (
        <EnrollmentConfirmation
          courseTitle={course.title}
          isPaid={enrollmentResult.accessType === 'full'}
          enrollmentData={enrollmentResult.enrollmentData}
          onClose={() => setEnrollmentResult(null)}
        />
      )}
      
      <Link href="/courses" className="text-primary hover:underline inline-block mb-6">
        ← Back to Courses
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course main content */}
        <div className="lg:col-span-2">
          <CourseImage 
            title={course.title} 
            description={course.description}
            className="mb-6 rounded"
            showTitleOverlay={true}
          />
          
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {course.level}
            </span>
            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {course.duration}
            </span>
            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
              Instructor: {course.instructor}
            </span>
          </div>
          
          <h2 className="text-xl font-bold mb-2">About This Course</h2>
          <p className="mb-6">{course.description}</p>
          
          <h2 className="text-xl font-bold mb-4">Course Modules</h2>
          <div className="space-y-1 mb-8">
            {course.modules.map((module, index) => (
              <ModuleDetail
                key={index}
                moduleTitle={module.title}
                courseTitle={course.title}
                level={course.level}
                duration={module.duration}
              />
            ))}
          </div>
        </div>
        
        {/* Course sidebar */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
            <h2 className="text-xl font-bold mb-4">Enroll Now</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of students already learning on EduAutomation.
            </p>
            
            <div className="bg-white p-4 rounded border mb-6 hover-card transition-all hover:shadow-md">
              <div className="text-2xl font-bold text-center mb-2 hover-text">Free</div>
              <div className="text-center text-gray-600 mb-4 hover-text">Limited Access</div>
              <button 
                className="btn-primary w-full mb-2"
                onClick={() => enrollInCourse(false)}
                disabled={isEnrolling}
              >
                {isEnrolling ? 'Processing...' : 'Enroll Free'}
              </button>
              <div className="text-sm text-gray-600">No credit card required</div>
            </div>
            
            <div className="bg-white p-4 rounded border mb-6 hover-card transition-all hover:shadow-md">
              <div className="text-2xl font-bold text-center mb-2 hover-text">$49.99</div>
              <div className="text-center text-gray-600 mb-4 hover-text">Full Access</div>
              <button 
                className="btn-primary w-full mb-2"
                onClick={() => enrollInCourse(true)}
                disabled={isEnrolling}
              >
                {isEnrolling ? 'Processing...' : 'Enroll Now'}
              </button>
              <div className="text-sm text-gray-600">30-day money-back guarantee</div>
            </div>
            
            <div className="text-sm text-gray-600">
              <div className="font-bold mb-2">This course includes:</div>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> {course.modules.length} modules</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lifetime access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Practical exercises</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 