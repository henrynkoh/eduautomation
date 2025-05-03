'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CourseImageProps {
  title: string;
  description?: string;
  className?: string;
  showTitleOverlay?: boolean;
}

export default function CourseImage({ 
  title, 
  description, 
  className = '',
  showTitleOverlay = false
}: CourseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    async function fetchImage() {
      try {
        setLoading(true);
        const response = await fetch('/api/ai/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            courseTitle: title,
            courseDescription: description,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate image');
        }

        const data = await response.json();
        setImageUrl(data.imageUrl);
      } catch (err) {
        console.error('Error fetching image:', err);
        setError('Could not load image');
      } finally {
        setLoading(false);
      }
    }

    if (title) {
      fetchImage();
    }
  }, [title, description]);

  if (loading) {
    return (
      <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="animate-pulse flex flex-col items-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p className="mt-2 text-sm text-gray-500">Generating image...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-400">Course Image Unavailable</div>
      </div>
    );
  }

  return (
    <div 
      className={`aspect-video relative bg-gray-200 hover-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={imageUrl} 
        alt={`Cover image for ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-t-lg"
      />
      
      {/* Permanent overlay for better contrast at bottom */}
      <div className="image-overlay"></div>
      
      {/* Title overlay when showTitleOverlay is true or on hover */}
      {(showTitleOverlay || isHovered) && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="image-text text-lg font-bold">{title}</h3>
          {isHovered && description && (
            <p className="image-text text-sm mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
} 