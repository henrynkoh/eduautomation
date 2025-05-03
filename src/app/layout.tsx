import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduAutomation - AI-Powered Learning Platform',
  description: 'Personalized education and training platform using Docker, n8n workflows, and MCP AI integration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-md">
          <div className="container mx-auto py-4 px-6">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
                EduAutomation
              </a>
              <nav>
                <ul className="flex space-x-1 md:space-x-4 items-center">
                  <li>
                    <a 
                      href="/" 
                      className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/courses" 
                      className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/workflows" 
                      className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
                    >
                      Workflows
                    </a>
                  </li>
                  <li className="hidden md:block">
                    <a 
                      href="/login" 
                      className="ml-4 px-4 py-2 rounded-md bg-white text-primary font-medium hover:bg-gray-100 transition-colors"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">EduAutomation</h3>
                <p className="text-gray-400">
                  AI-powered personalized education platform leveraging Docker, n8n workflows, and MCP integration.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                  <li><a href="/workflows" className="text-gray-400 hover:text-white transition-colors">Workflows</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">Stay updated with our latest courses and features.</p>
                <form className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-3 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button 
                    type="submit" 
                    className="w-full px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2024 EduAutomation. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 