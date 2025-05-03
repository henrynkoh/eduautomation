import { NextResponse } from 'next/server';
import crypto from 'crypto';

// This is a simulated AI image generation
// In a real application, you would call a service like DALL-E or Stable Diffusion
export async function POST(request: Request) {
  try {
    const { courseTitle, courseDescription } = await request.json();
    
    if (!courseTitle) {
      return NextResponse.json(
        { error: 'Course title is required' },
        { status: 400 }
      );
    }
    
    // Generate a deterministic hash based on the course title
    // This ensures the same course always gets the same image
    const hash = crypto.createHash('md5').update(courseTitle).digest('hex');
    
    // Use the hash to select a background color and pattern
    const colorIndex = parseInt(hash.substring(0, 2), 16) % 6;
    const patternIndex = parseInt(hash.substring(2, 4), 16) % 4;
    
    // Set of background gradient colors
    const gradients = [
      'from-blue-500 to-indigo-600', // Blueish
      'from-purple-500 to-pink-500', // Purple-pink
      'from-green-400 to-cyan-500',  // Greenish
      'from-yellow-400 to-orange-500', // Yellowish
      'from-red-500 to-pink-500',    // Reddish
      'from-gray-700 to-gray-900',   // Dark gray
    ];
    
    // Set of patterns or imagery that could be associated with the course
    const patterns = [
      'blocks',      // Container blocks (Docker-like)
      'network',     // Network connections (workflow-like)
      'chip',        // Circuit/AI related
      'code',        // Code snippets
    ];
    
    // Select a gradient and pattern based on the hash
    const gradient = gradients[colorIndex];
    const pattern = patterns[patternIndex];
    
    // Generate a simulated URL that would point to a real image
    // In production, this would be the URL returned by the image generation API
    const imageUrl = `/images/courses/${pattern}-${colorIndex}.jpg`;
    
    // This would be asynchronous in a real application
    console.log(`Generated image for course: ${courseTitle} using ${pattern} pattern with ${gradient} colors`);
    
    // Add a small random delay to simulate API latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 100));
    
    return NextResponse.json({ 
      imageUrl,
      metadata: {
        title: courseTitle,
        description: courseDescription || '',
        pattern,
        gradient
      }
    });
  } catch (error: any) {
    console.error('Error generating image:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to generate image',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
} 