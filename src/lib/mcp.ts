import axios from 'axios';

// Define MCP server URL - in production, this would be an actual MCP server
const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'http://localhost:5680';

// Define types for the MCP API
interface MCPToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, any>;
}

interface MCPRequest {
  prompt: string;
  model: string;
  tools?: MCPToolDefinition[];
  max_tokens?: number;
  temperature?: number;
}

interface MCPResponse {
  completion: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  tool_calls?: Array<{
    name: string;
    parameters: Record<string, any>;
  }>;
}

/**
 * Generate content using MCP-enabled AI models
 */
export const generateContent = async (prompt: string, options?: { 
  model?: string;
  max_tokens?: number;
  temperature?: number;
  tools?: MCPToolDefinition[];
}): Promise<string> => {
  try {
    const model = options?.model || 'claude-3-sonnet-20240229';
    
    const request: MCPRequest = {
      prompt,
      model,
      max_tokens: options?.max_tokens || 1000,
      temperature: options?.temperature || 0.7,
      tools: options?.tools,
    };
    
    const response = await axios.post<MCPResponse>(`${MCP_SERVER_URL}/v1/complete`, request);
    
    return response.data.completion;
  } catch (error) {
    console.error('Error generating content with MCP:', error);
    return 'Failed to generate content. Please try again later.';
  }
};

/**
 * Generate personalized course content based on user preferences
 */
export const generateCourseContent = async (
  courseTitle: string,
  userPreferences: string[],
  userSkillLevel: 'beginner' | 'intermediate' | 'advanced'
): Promise<string> => {
  const prompt = `
    Generate educational content for a course titled "${courseTitle}".
    The user's preferences include: ${userPreferences.join(', ')}.
    The user's skill level is: ${userSkillLevel}.
    
    Generate a comprehensive lesson that covers the key concepts while adapting to the user's skill level
    and incorporating their preferences. Include examples and exercises.
  `;
  
  return generateContent(prompt, { max_tokens: 2000 });
};

/**
 * Extract quiz questions from course content
 */
export const generateQuizQuestions = async (
  courseContent: string,
  numberOfQuestions: number = 5
): Promise<any[]> => {
  const prompt = `
    Based on the following course content, generate ${numberOfQuestions} quiz questions with multiple choice answers.
    Mark the correct answer.
    
    Course content:
    ${courseContent.substring(0, 4000)} // Limiting to 4000 chars for token considerations
    
    Format the response as a JSON array of objects with the following structure:
    [
      {
        "question": "Question text here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 0 // Index of the correct option
      }
    ]
  `;
  
  try {
    const response = await generateContent(prompt, { max_tokens: 2000 });
    // Extract JSON from the response - this assumes the AI model returned valid JSON
    const jsonMatch = response.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    return [];
  }
};

/**
 * Define standard tools for MCP integration
 */
export const standardMCPTools: MCPToolDefinition[] = [
  {
    name: 'search_web',
    description: 'Search the web for educational content',
    parameters: {
      query: {
        type: 'string',
        description: 'The search query',
      },
    },
  },
  {
    name: 'fetch_course_data',
    description: 'Fetch details about a specific course',
    parameters: {
      course_id: {
        type: 'string',
        description: 'The ID of the course to fetch',
      },
    },
  },
  {
    name: 'generate_exercise',
    description: 'Generate a practical exercise based on a topic',
    parameters: {
      topic: {
        type: 'string',
        description: 'The topic to generate an exercise for',
      },
      difficulty: {
        type: 'string',
        enum: ['easy', 'medium', 'hard'],
        description: 'The difficulty level of the exercise',
      },
    },
  },
];

export default {
  generateContent,
  generateCourseContent,
  generateQuizQuestions,
  standardMCPTools,
}; 