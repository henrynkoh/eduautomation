const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Anthropic } = require('@anthropic-ai/sdk');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5680;

// Create Anthropic client for Claude models
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Main MCP completion endpoint
app.post('/v1/complete', async (req, res) => {
  try {
    const { prompt, model, max_tokens, temperature, tools } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    // Use Anthropic's Claude via their API
    const response = await anthropic.completions.create({
      model: model || 'claude-3-sonnet-20240229',
      prompt: prompt,
      max_tokens_to_sample: max_tokens || 1000,
      temperature: temperature || 0.7,
    });
    
    // MCP would handle tools, but we're simplifying here
    // In a real implementation, we'd parse the response for tool calls
    
    return res.status(200).json({
      completion: response.completion,
      usage: {
        prompt_tokens: Math.ceil(prompt.length / 4), // Rough approximation
        completion_tokens: Math.ceil(response.completion.length / 4),
        total_tokens: Math.ceil((prompt.length + response.completion.length) / 4),
      },
    });
  } catch (error) {
    console.error('Error generating completion:', error);
    return res.status(500).json({ 
      error: 'Failed to generate completion',
      details: error.message 
    });
  }
});

// Tool execution endpoint - simplified implementation
app.post('/v1/execute-tool', (req, res) => {
  const { tool_name, parameters } = req.body;
  
  // In a real implementation, we would have proper tool execution logic
  // This is just a placeholder that returns mock data
  
  let result = {
    status: 'success',
    data: { message: `Tool ${tool_name} executed with parameters: ${JSON.stringify(parameters)}` }
  };
  
  // Mock some basic tools
  if (tool_name === 'search_web') {
    result.data = {
      results: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com' },
        { title: 'n8n Workflow Automation', url: 'https://n8n.io' },
        { title: 'Model Context Protocol', url: 'https://github.com/anthropics/anthropic-cookbook/tree/main/model_context_protocol' },
      ]
    };
  } else if (tool_name === 'fetch_course_data') {
    result.data = {
      id: parameters.course_id,
      title: 'Sample Course',
      modules: ['Introduction', 'Core Concepts', 'Advanced Topics'],
      duration: '4 weeks'
    };
  }
  
  res.status(200).json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
}); 