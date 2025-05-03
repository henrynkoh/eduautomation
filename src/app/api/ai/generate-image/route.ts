import { NextResponse } from 'next/server';
import axios from 'axios';

// More sophisticated hash function for deterministic but nice-looking images
function createImageHash(prompt: string): string {
  // Create a hash based on the prompt (simple version)
  let hash = 0;
  for (let i = 0; i < prompt.length; i++) {
    const char = prompt.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Convert to hex and ensure it's always positive
  const hexHash = Math.abs(hash).toString(16);
  
  // Use some known good seeds for educational content
  const goodImageSeeds = [
    'a5b57', 'e82f1', '3d9c2', 'b7f8e', 'f1d45',
    'c68d3', '9ae52', '4b76c', 'd2e19', '7c3f8'
  ];
  
  // Use the hash to pick from our good seeds
  const seedIndex = Math.abs(hash) % goodImageSeeds.length;
  return goodImageSeeds[seedIndex];
}

// Mock image generation function since we don't have direct access to image generation APIs
// In a real implementation, you would use an image generation API like DALL-E or Stable Diffusion
async function generateImageUrl(prompt: string): Promise<string> {
  // For demo purposes, we'll use Picsum to get random placeholder images
  // In production, replace with actual AI image generation API
  const hash = createImageHash(prompt);
  
  // Use a larger image size with a different aspect ratio for better course images
  return `https://picsum.photos/seed/${hash}/1200/800`;
}

export async function POST(request: Request) {
  try {
    const { courseTitle, courseDescription } = await request.json();
    
    if (!courseTitle) {
      return NextResponse.json(
        { error: 'Course title is required' },
        { status: 400 }
      );
    }
    
    // Create a prompt for image generation based on course details
    const prompt = `Educational image for a course titled "${courseTitle}". ${
      courseDescription ? `The course covers: ${courseDescription}` : ''
    }. Create a professional, clean image suitable for an online learning platform.`;
    
    // Generate image URL
    const imageUrl = await generateImageUrl(prompt);
    
    return NextResponse.json({ imageUrl });
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