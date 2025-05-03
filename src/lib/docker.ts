import Dockerode from 'dockerode';

// Initialize Docker client
const docker = new Dockerode();

/**
 * Get status of Docker containers
 */
export const getContainerStatus = async (): Promise<any[]> => {
  try {
    const containers = await docker.listContainers({ all: true });
    return containers.map(container => ({
      id: container.Id,
      name: container.Names[0].replace(/^\//, ''),
      image: container.Image,
      state: container.State,
      status: container.Status,
    }));
  } catch (error) {
    console.error('Error getting container status:', error);
    return [];
  }
};

/**
 * Start a specific container by name
 */
export const startContainer = async (containerName: string): Promise<boolean> => {
  try {
    const containers = await docker.listContainers({ all: true });
    const targetContainer = containers.find(c => 
      c.Names.some(name => name.replace(/^\//, '') === containerName)
    );
    
    if (!targetContainer) {
      throw new Error(`Container '${containerName}' not found`);
    }
    
    const container = docker.getContainer(targetContainer.Id);
    await container.start();
    return true;
  } catch (error) {
    console.error(`Error starting container '${containerName}':`, error);
    return false;
  }
};

/**
 * Stop a specific container by name
 */
export const stopContainer = async (containerName: string): Promise<boolean> => {
  try {
    const containers = await docker.listContainers();
    const targetContainer = containers.find(c => 
      c.Names.some(name => name.replace(/^\//, '') === containerName)
    );
    
    if (!targetContainer) {
      throw new Error(`Container '${containerName}' not found or not running`);
    }
    
    const container = docker.getContainer(targetContainer.Id);
    await container.stop();
    return true;
  } catch (error) {
    console.error(`Error stopping container '${containerName}':`, error);
    return false;
  }
};

/**
 * Get logs from a specific container
 */
export const getContainerLogs = async (containerName: string, tail: number = 100): Promise<string> => {
  try {
    const containers = await docker.listContainers({ all: true });
    const targetContainer = containers.find(c => 
      c.Names.some(name => name.replace(/^\//, '') === containerName)
    );
    
    if (!targetContainer) {
      throw new Error(`Container '${containerName}' not found`);
    }
    
    const container = docker.getContainer(targetContainer.Id);
    const logs = await container.logs({
      stdout: true,
      stderr: true,
      tail,
    });
    
    return logs.toString();
  } catch (error) {
    console.error(`Error getting logs for container '${containerName}':`, error);
    return `Error: ${error.message}`;
  }
};

export default {
  getContainerStatus,
  startContainer,
  stopContainer,
  getContainerLogs,
}; 