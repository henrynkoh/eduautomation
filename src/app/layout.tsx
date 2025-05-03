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
        <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">EduAutomation</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-white hover:bg-primary-dark px-3 py-2 rounded transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-white hover:bg-primary-dark px-3 py-2 rounded transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/workflows" className="hover:text-white hover:bg-primary-dark px-3 py-2 rounded transition-colors">
                    Workflows
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>© 2024 EduAutomation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 