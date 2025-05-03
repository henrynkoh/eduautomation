# EduAutomation

EduAutomation is a Next.js-based web platform that delivers **customized education and training classes** using AI-driven automation. Built with Docker for scalability, n8n-inspired workflows for automation, and MCP-like AI integration for personalized content, it empowers learners with practical, tailored education experiences.

## Features

- **Personalized Learning**: AI-generated course content based on user preferences.
- **Workflow Automation**: Automates course delivery and progress tracking.
- **Containerized Deployment**: Runs consistently with Docker.
- **API Integration**: Connects with educational APIs for dynamic content.
- **Scalable UI**: Built with Next.js 14, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 20+
- Docker Desktop
- Git
- API keys (e.g., Anthropic for AI content generation)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/eduautomation.git
   cd eduautomation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   ANTHROPIC_API_KEY=your-anthropic-api-key
   MCP_SERVER_URL=http://localhost:5680
   N8N_URL=http://localhost:5678
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   
   Visit http://localhost:3000.

## Docker Setup

Build and run with Docker Compose:

```bash
docker-compose up --build
```

Access the app at http://localhost:3000, n8n at http://localhost:5678, and MCP at http://localhost:5680.

## Project Structure

```
eduautomation/
├── src/                    # Source code
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API endpoints
│   │   ├── courses/        # Course pages
│   │   └── workflows/      # Workflow pages
│   ├── components/         # React components
│   └── lib/                # Utility functions
├── mcp-server/             # Model Context Protocol server
├── public/                 # Static assets
├── docker-compose.yml      # Docker Compose configuration
└── Dockerfile              # Docker configuration
```

## Key Technologies

- **Next.js**: Framework for server-rendered React applications
- **Docker**: Containerization for consistent deployment
- **n8n**: Workflow automation
- **MCP**: Model Context Protocol for AI integration
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

## Usage

### Courses

Browse available courses at `/courses`. Each course is designed to be modular and can be customized based on learner preferences.

### Workflows

Explore and create automated workflows at `/workflows`. These workflows handle tasks like content generation and progress tracking.

### AI Integration

The platform uses AI to generate personalized course content, quiz questions, and recommendations.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m "Add YourFeature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

MIT License

## Contact

For support, email support@eduautomation.com or join our Discord community. 