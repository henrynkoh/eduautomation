import { NextResponse } from 'next/server';

// Mock module content generation - in a real app, this would use an actual LLM API
async function generateModuleContent(moduleTitle: string, courseTitle: string, level: string): Promise<{
  overview: string;
  keyPoints: string[];
  resources: { title: string; url: string; type: string }[];
  activities: { title: string; description: string; duration: string }[];
}> {
  // Sample data based on the module and course titles
  const moduleContent = {
    "Introduction to Containers": {
      overview: "This module provides a comprehensive introduction to container technology. You'll learn what containers are, how they differ from virtual machines, and why they've become essential in modern software development and deployment. We'll cover core concepts and prepare you for working with Docker in upcoming modules.",
      keyPoints: [
        "Core container concepts and architecture",
        "Container vs VM comparison",
        "History and evolution of containerization",
        "Container orchestration overview",
        "Benefits of containers in development and production"
      ],
      resources: [
        { title: "Container Fundamentals", url: "https://docs.docker.com/get-started/overview/", type: "Documentation" },
        { title: "Introduction to Containerization", url: "https://www.youtube.com/watch?v=0qotVMX-J5s", type: "Video" }
      ],
      activities: [
        { title: "Container Concept Map", description: "Create a concept map showing the relationship between containers, images, registries, and hosts.", duration: "15 min" },
        { title: "Container Use Case Analysis", description: "Analyze and document three potential use cases for containers in your organization or project.", duration: "30 min" }
      ]
    },
    "Docker Architecture": {
      overview: "This module explores Docker's architecture in detail, showing how all the components work together. You'll understand the client-server model, the Docker daemon, and how containers are managed. This foundation will help you effectively work with Docker containers and troubleshoot issues as they arise.",
      keyPoints: [
        "Docker Engine components and design",
        "Docker daemon and client interaction",
        "Container runtime and containerd",
        "Docker storage drivers",
        "Docker networking fundamentals"
      ],
      resources: [
        { title: "Docker Architecture Overview", url: "https://docs.docker.com/get-started/overview/#docker-architecture", type: "Documentation" },
        { title: "Deep Dive into Docker Architecture", url: "https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612", type: "Article" }
      ],
      activities: [
        { title: "Docker Component Diagram", description: "Create a diagram showing the relationship between Docker client, daemon, registry, and containers.", duration: "20 min" },
        { title: "Docker Info Analysis", description: "Run 'docker info' command and analyze the output to understand your Docker installation.", duration: "25 min" }
      ]
    },
    "Creating Your First Container": {
      overview: "In this hands-on module, you'll create and run your first Docker containers. We'll guide you through writing Dockerfiles, building images, and running containers with various configuration options. By the end, you'll be comfortable with the core Docker workflow and ready to containerize your own applications.",
      keyPoints: [
        "Writing effective Dockerfiles",
        "Building and tagging Docker images",
        "Running containers with various options",
        "Container lifecycle management",
        "Environment variables and volumes"
      ],
      resources: [
        { title: "Dockerfile Best Practices", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", type: "Documentation" },
        { title: "Docker Build Tutorial", url: "https://docs.docker.com/engine/reference/builder/", type: "Tutorial" }
      ],
      activities: [
        { title: "Hello World Container", description: "Create and run a simple hello-world container with a custom message.", duration: "15 min" },
        { title: "Web Application Containerization", description: "Containerize a simple web application (Node.js or your preferred language).", duration: "45 min" }
      ]
    },
    "Docker Compose": {
      overview: "This module introduces Docker Compose for managing multi-container applications. You'll learn how to define and run complex applications with multiple interconnected services. We'll cover Compose file syntax, networking, and how to orchestrate container startup and shutdown for development and testing environments.",
      keyPoints: [
        "Compose file syntax and versions",
        "Service definitions and configuration",
        "Networks and volumes in Compose",
        "Environment variables and secrets",
        "Development workflows with Compose"
      ],
      resources: [
        { title: "Docker Compose Documentation", url: "https://docs.docker.com/compose/", type: "Documentation" },
        { title: "Compose File Reference", url: "https://docs.docker.com/compose/compose-file/", type: "Reference" }
      ],
      activities: [
        { title: "Multi-Service Compose File", description: "Create a docker-compose.yml file for a web application with a database and cache service.", duration: "30 min" },
        { title: "Development Environment Setup", description: "Configure a complete development environment using Docker Compose with hot reloading.", duration: "45 min" }
      ]
    },
    "Docker in Production": {
      overview: "The final module covers best practices for running Docker in production environments. You'll learn about security considerations, resource management, monitoring, and scaling. We'll also introduce orchestration platforms like Kubernetes and Docker Swarm that help manage containerized applications at scale.",
      keyPoints: [
        "Container security best practices",
        "Resource limits and constraints",
        "Logging and monitoring solutions",
        "Docker in CI/CD pipelines",
        "Introduction to orchestration platforms"
      ],
      resources: [
        { title: "Docker Security", url: "https://docs.docker.com/engine/security/", type: "Documentation" },
        { title: "Production Container Guide", url: "https://cloud.google.com/solutions/best-practices-for-operating-containers", type: "Guide" }
      ],
      activities: [
        { title: "Security Audit", description: "Perform a security audit on a Docker image and implement best practices.", duration: "40 min" },
        { title: "Monitoring Setup", description: "Set up basic monitoring for Docker containers using Prometheus and Grafana.", duration: "50 min" }
      ]
    }
  };
  
  // Default content for any missing module
  const defaultContent = {
    overview: `This module on ${moduleTitle} is part of the ${courseTitle} course. It's designed for ${level.toLowerCase()} level students who want to master Docker and containerization technologies.`,
    keyPoints: [
      `Understanding ${moduleTitle} concepts`,
      "Practical hands-on exercises",
      "Real-world applications and examples",
      "Best practices and optimization techniques",
      "Troubleshooting common issues"
    ],
    resources: [
      { title: "Official Documentation", url: "https://docs.docker.com/", type: "Documentation" },
      { title: `${moduleTitle} Deep Dive`, url: "https://www.docker.com/blog/", type: "Article" }
    ],
    activities: [
      { title: "Hands-on Exercise", description: `Practice applying ${moduleTitle} concepts in a realistic scenario.`, duration: "30 min" },
      { title: "Knowledge Check Quiz", description: "Test your understanding of the key concepts covered in this module.", duration: "15 min" }
    ]
  };
  
  // Return the specific module content if available, otherwise the default content
  return moduleContent[moduleTitle as keyof typeof moduleContent] || defaultContent;
}

export async function POST(request: Request) {
  try {
    const { moduleTitle, courseTitle, level = "Beginner" } = await request.json();
    
    if (!moduleTitle) {
      return NextResponse.json(
        { error: 'Module title is required' },
        { status: 400 }
      );
    }
    
    const moduleContent = await generateModuleContent(moduleTitle, courseTitle, level);
    
    return NextResponse.json({ moduleContent });
  } catch (error: any) {
    console.error('Error generating module content:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to generate module content',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
} 