# EduAutomation Quick Start Guide

Get started with **EduAutomation** in 5 minutes!

## Step 1: Set Up

1. Ensure Docker Desktop and Node.js 20 are installed.
2. Clone the repo:
   ```bash
   git clone https://github.com/your-username/eduautomation.git
   cd eduautomation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Step 2: Configure

Create a `.env.local` file with your API keys:

```
ANTHROPIC_API_KEY=your-anthropic-api-key
MCP_SERVER_URL=http://localhost:5680
N8N_URL=http://localhost:5678
```

## Step 3: Development Mode

Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to view the application.

## Step 4: Docker Deployment (Optional)

For a full deployment with n8n and MCP server:

```bash
docker-compose up --build
```

This will start:
- EduAutomation at http://localhost:3000
- n8n at http://localhost:5678
- MCP server at http://localhost:5680

## Step 5: Explore the Platform

1. **Browse Courses**: Visit the `/courses` page to see available training classes.
2. **Explore Workflows**: Check out `/workflows` to see automation templates.
3. **View Course Details**: Click on any course to see its modules and content.

## Next Steps

- Customize course content using the AI integration
- Create your own workflow for personalized learning
- Experiment with Docker for deployment

## Troubleshooting

- **Can't connect to MCP server?** Check that your Anthropic API key is valid.
- **Docker issues?** Ensure Docker Desktop is running and ports 3000, 5678, and 5680 are free.
- **n8n workflows not working?** Verify that n8n is running and accessible.

For more help, see the full documentation or contact support@eduautomation.com. 