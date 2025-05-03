import Link from 'next/link';
import CourseImage from '@/components/CourseImage';

// Sample course data - in a real application, this would come from an API
const courses = [
  {
    id: 1,
    title: 'Docker Fundamentals',
    description: 'Learn the basics of containerization with Docker, from images to deployment.',
    level: 'Beginner',
    duration: '4 weeks',
    image: '/images/docker-course.jpg',
  },
  {
    id: 2,
    title: 'n8n Workflow Automation',
    description: 'Master the art of no-code automation with n8n to streamline your processes.',
    level: 'Intermediate',
    duration: '3 weeks',
    image: '/images/n8n-course.jpg',
  },
  {
    id: 3,
    title: 'AI Integration with MCP',
    description: 'Discover how to integrate AI models using the Model Context Protocol.',
    level: 'Advanced',
    duration: '6 weeks',
    image: '/images/mcp-course.jpg',
  },
  {
    id: 4,
    title: 'Full-Stack Education Platform',
    description: 'Build your own education platform with Next.js, Docker, and AI integration.',
    level: 'Advanced',
    duration: '8 weeks',
    image: '/images/fullstack-course.jpg',
  },
];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      
      {/* Filters - could be made functional in a real application */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
            <select className="filter-input">
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
            <select className="filter-input">
              <option value="">Any Duration</option>
              <option value="short">1-3 weeks</option>
              <option value="medium">4-6 weeks</option>
              <option value="long">7+ weeks</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topic</label>
            <select className="filter-input">
              <option value="">All Topics</option>
              <option value="docker">Docker</option>
              <option value="n8n">n8n</option>
              <option value="ai">AI & MCP</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full h-11">Apply Filters</button>
          </div>
        </div>
      </div>
      
      {/* Course list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card overflow-hidden">
            <CourseImage 
              title={course.title} 
              description={course.description}
              className="mb-4"
              showTitleOverlay={true}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="text-sm text-gray-600">
                  {course.duration}
                </span>
              </div>
              <Link 
                href={`/courses/${course.id}`}
                className="btn-primary inline-block"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 