# EduAutomation Manual

## Overview
EduAutomation is a Next.js 14 application designed for customized education and training. It integrates Docker for containerized deployment, n8n-inspired workflows for automation, and MCP-like AI for content personalization.

## System Architecture
- **Frontend**: Next.js with App Router, TypeScript, and Tailwind CSS.
- **Backend**: Node.js with `n8n-workflow` for automation and `@anthropic-ai/sdk` for AI.
- **Containerization**: Docker and Docker Compose for app, n8n, and MCP servers.
- **APIs**: External educational APIs (e.g., Google Classroom, YouTube).

## Setup Instructions
### Prerequisites
- Node.js 20, Docker Desktop, Git.
- API keys: Anthropic (for AI), educational APIs (optional).

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/eduautomation.git
   cd eduautomation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env.local`:
   ```
   ANTHROPIC_API_KEY=your-key
   MCP_SERVER_URL=http://localhost:5680
   N8N_URL=http://localhost:5678
   ```

4. Run locally:
   ```bash
   npm run dev
   ```

### Docker Deployment
Run with Docker Compose:
```bash
docker-compose up --build
```

Access:
- App: http://localhost:3000
- n8n: http://localhost:5678
- MCP server: http://localhost:5680

## Core Components

### Next.js Application
The main web application provides the user interface for exploring courses, managing workflows, and interacting with the AI system.

#### Key Files:
- `src/app/page.tsx` - Homepage
- `src/app/courses/page.tsx` - Course listing
- `src/app/courses/[id]/page.tsx` - Course details
- `src/app/workflows/page.tsx` - Workflow management

### API Routes
The application includes several API endpoints to interact with courses, workflows, and AI functions.

#### Key Files:
- `src/app/api/courses/route.ts` - Course API
- `src/app/api/workflows/route.ts` - Workflow API
- `src/app/api/ai/generate/route.ts` - AI content generation

### MCP Server
The Model Context Protocol server handles AI requests, using Anthropic's Claude model for content generation.

#### Key Files:
- `mcp-server/index.js` - Express server for MCP
- `mcp-server/Dockerfile` - Docker configuration

### Docker Integration
Docker is used to containerize the application, n8n, and MCP server for consistent deployment.

#### Key Files:
- `Dockerfile` - Main application container
- `docker-compose.yml` - Multi-container setup
- `src/lib/docker.ts` - Docker integration library

## Customization

### Adding New Courses
To add new courses, modify the course data in `src/app/api/courses/route.ts` or connect to a database.

### Creating Workflows
Workflows are defined in `src/lib/n8n.ts` and can be customized for different educational use cases.

### Configuring AI
The MCP integration can be customized in `src/lib/mcp.ts` to change prompts or models.

## Maintenance
### Update Dependencies: 
Run `npm update` monthly.

### Monitor Containers: 
Use `docker ps` and `docker logs`.

### Backup Data: 
Back up n8n data (`n8n_data` volume) weekly.

### Secure APIs: 
Rotate API keys regularly and use `.env.local`.

## Troubleshooting
### App Not Starting: 
Check Docker Desktop status and port conflicts.

### API Errors: 
Verify API keys and network connectivity.

### Workflow Failures: 
Debug n8n workflows in `src/lib/n8n.ts`.

## Scaling
### Cloud Deployment
For production, deploy to a cloud provider:
```bash
# Build production image
docker build -t eduautomation:prod .

# Push to container registry
docker push yourusername/eduautomation:prod
```

### Kubernetes
For high availability, use a Kubernetes manifest.

## Advanced Configuration
### Environment Variables
```
# Basic config
NODE_ENV=production

# API keys
ANTHROPIC_API_KEY=your-key

# Service URLs
MCP_SERVER_URL=http://mcp:5680
N8N_URL=http://n8n:5678
```

### Modifying Docker Compose
To add more services or customize existing ones, edit `docker-compose.yml`.

## Security Considerations
- Store API keys in environment variables
- Use HTTPS in production
- Regularly update dependencies
- Implement authentication for protected routes

## Support
For issues:
- GitHub Issues: [https://github.com/your-username/eduautomation/issues](https://github.com/your-username/eduautomation/issues)
- Email: support@eduautomation.com 