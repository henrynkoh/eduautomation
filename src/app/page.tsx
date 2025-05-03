import Link from 'next/link';
import Image from 'next/image';
import CourseImage from '@/components/CourseImage';

// Sample featured courses
const featuredCourses = [
  {
    id: '1',
    title: 'Docker Fundamentals',
    description: 'Learn the basics of containerization with Docker, from images to deployment.',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'n8n Workflow Automation',
    description: 'Master the art of no-code automation with n8n to streamline your processes.',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'AI Integration with MCP',
    description: 'Discover how to integrate AI models using the Model Context Protocol.',
    level: 'Advanced',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 rounded-xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Learn. Automate.
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {' '}Innovate.
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Personalize your learning journey with our AI-powered education platform that combines Docker containerization, n8n workflow automation, and MCP integration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/courses" 
                  className="btn-primary py-3 px-6 text-lg"
                >
                  Explore Courses
                </Link>
                <Link 
                  href="/workflows" 
                  className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-lg"
                >
                  View Workflows
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-80">
              <Image
                src="/images/hero-education.svg"
                alt="Education automation illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link href="/courses" className="text-primary hover:underline">
              View All Courses →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Link 
                key={course.id} 
                href={`/courses/${course.id}`}
                className="group transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="card border-0 shadow-md hover:shadow-xl overflow-hidden">
                  <CourseImage 
                    title={course.title} 
                    description={course.description}
                    showTitleOverlay={false}
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{course.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{course.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl dark:bg-gray-800">
              <div className="p-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full h-14 w-14 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Containerized Deployment</h3>
                <p className="text-gray-600 dark:text-gray-300">Docker-based architecture ensures consistent delivery of educational content across any environment.</p>
              </div>
            </div>
            <div className="card border-t-4 border-t-indigo-500 shadow-lg hover:shadow-xl dark:bg-gray-800">
              <div className="p-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full h-14 w-14 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
                <p className="text-gray-600 dark:text-gray-300">n8n-inspired workflows automate personalization of courses based on learner preferences and progress.</p>
              </div>
            </div>
            <div className="card border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl dark:bg-gray-800">
              <div className="p-6">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full h-14 w-14 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Driven Customization</h3>
                <p className="text-gray-600 dark:text-gray-300">MCP-inspired AI integration adapts content in real-time based on learner performance and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI-Powered Learning</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our platform leverages advanced language models to create personalized learning experiences tailored to each student's needs and goals.
              </p>
              <ul className="space-y-4">
                {[
                  'Adaptive learning paths based on your progress',
                  'AI-generated course content and exercises',
                  'Personalized feedback on your work',
                  'Custom learning plan creation',
                  'Real-time assistance during your learning journey'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center px-6 py-4">
                <div className="space-y-6 w-full max-w-md">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                    <div className="flex space-x-2 mb-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                      <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                      <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg ml-auto w-4/5">
                    <p className="font-medium">Generating your personalized Docker learning path...</p>
                    <div className="mt-2 flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of learners who have accelerated their education with our AI-powered platform. Get started today!
          </p>
          <Link 
            href="/courses" 
            className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
} 