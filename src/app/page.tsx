import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to EduAutomation</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          AI-powered personalized education and training platform, leveraging Docker, n8n workflows, and MCP integration.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/courses" 
            className="btn-primary"
          >
            Explore Courses
          </Link>
          <Link 
            href="/workflows" 
            className="bg-white text-primary border border-primary px-4 py-2 rounded hover:bg-gray-50 transition-colors"
          >
            View Workflows
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="font-bold text-xl mb-2">Containerized Deployment</div>
            <p>Docker-based architecture ensures consistent delivery of educational content across any environment.</p>
          </div>
          <div className="card">
            <div className="font-bold text-xl mb-2">Workflow Automation</div>
            <p>n8n-inspired workflows automate personalization of courses based on learner preferences and progress.</p>
          </div>
          <div className="card">
            <div className="font-bold text-xl mb-2">AI-Driven Customization</div>
            <p>MCP-inspired AI integration adapts content in real-time based on learner performance and goals.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="mb-6">Join thousands of learners who have accelerated their education with our platform.</p>
        <Link 
          href="/courses" 
          className="btn-primary"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
} 