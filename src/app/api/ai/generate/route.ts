import { NextResponse } from 'next/server';
import axios from 'axios';

// MCP server URL - in a real app, this would be properly configured
const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'http://localhost:5680';

export async function POST(request: Request) {
  try {
    const { prompt, model, max_tokens, temperature, tools } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }
    
    // Call the MCP server to generate content
    const response = await axios.post(`${MCP_SERVER_URL}/v1/complete`, {
      prompt,
      model: model || 'claude-3-sonnet-20240229',
      max_tokens: max_tokens || 2000,
      temperature: temperature || 0.7,
      tools,
    });
    
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error generating content:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to generate content',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
} 