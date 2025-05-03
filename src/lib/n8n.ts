import axios from 'axios';

// Define n8n server URL - in production, this would be an actual n8n server
const N8N_URL = process.env.N8N_URL || 'http://localhost:5678';

// Define types for the n8n API
interface WorkflowData {
  id?: string;
  name: string;
  active: boolean;
  nodes: any[];
  connections: Record<string, any>;
  settings?: Record<string, any>;
}

interface ExecutionData {
  workflowId: string;
  data?: Record<string, any>;
}

/**
 * Fetch workflows from n8n
 */
export const fetchWorkflows = async (): Promise<WorkflowData[]> => {
  try {
    const response = await axios.get(`${N8N_URL}/api/v1/workflows`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    return [];
  }
};

/**
 * Fetch a specific workflow by ID
 */
export const fetchWorkflowById = async (id: string): Promise<WorkflowData | null> => {
  try {
    const response = await axios.get(`${N8N_URL}/api/v1/workflows/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching workflow ${id}:`, error);
    return null;
  }
};

/**
 * Execute a workflow with data
 */
export const executeWorkflow = async (workflowId: string, data?: Record<string, any>): Promise<any> => {
  try {
    const executionData: ExecutionData = {
      workflowId,
      data,
    };
    
    const response = await axios.post(`${N8N_URL}/api/v1/workflows/run`, executionData);
    return response.data;
  } catch (error) {
    console.error(`Error executing workflow ${workflowId}:`, error);
    throw new Error(`Workflow execution failed: ${error.message}`);
  }
};

/**
 * Create a content generation workflow
 */
export const createContentGenerationWorkflow = async (
  name: string,
  courseTitle: string,
  description: string
): Promise<string | null> => {
  try {
    // Define a simple workflow with HTTP and MCP integration
    const workflow: WorkflowData = {
      name,
      active: true,
      nodes: [
        {
          id: 'Start',
          type: 'n8n-nodes-base.start',
          position: [100, 300],
          parameters: {},
        },
        {
          id: 'MCPIntegration',
          type: 'n8n-nodes-base.httpRequest',
          position: [300, 300],
          parameters: {
            url: `${process.env.MCP_SERVER_URL || 'http://localhost:5680'}/v1/complete`,
            method: 'POST',
            bodyParameters: {
              parameters: [
                {
                  name: 'prompt',
                  value: `=Generate educational content for a course titled "${courseTitle}". ${description}`,
                },
                {
                  name: 'model',
                  value: 'claude-3-sonnet-20240229',
                },
                {
                  name: 'max_tokens',
                  value: 2000,
                },
              ],
            },
          },
        },
        {
          id: 'SaveContent',
          type: 'n8n-nodes-base.set',
          position: [500, 300],
          parameters: {
            values: {
              string: [
                {
                  name: 'courseContent',
                  value: '={{$json.body.completion}}',
                },
              ],
            },
          },
        },
      ],
      connections: {
        Start: {
          main: [
            [
              {
                node: 'MCPIntegration',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
        MCPIntegration: {
          main: [
            [
              {
                node: 'SaveContent',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
    };
    
    // Create the workflow in n8n
    const response = await axios.post(`${N8N_URL}/api/v1/workflows`, workflow);
    return response.data.data.id;
  } catch (error) {
    console.error('Error creating content generation workflow:', error);
    return null;
  }
};

/**
 * Create a student progress tracking workflow
 */
export const createProgressTrackingWorkflow = async (
  name: string,
  courseId: string
): Promise<string | null> => {
  try {
    // Define a simple workflow for progress tracking
    const workflow: WorkflowData = {
      name,
      active: true,
      nodes: [
        {
          id: 'Schedule',
          type: 'n8n-nodes-base.schedule',
          position: [100, 300],
          parameters: {
            frequency: 'Daily',
            time: '12:00',
          },
        },
        {
          id: 'FetchStudentProgress',
          type: 'n8n-nodes-base.httpRequest',
          position: [300, 300],
          parameters: {
            url: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/courses/${courseId}/students`,
            method: 'GET',
          },
        },
        {
          id: 'ProcessProgress',
          type: 'n8n-nodes-base.function',
          position: [500, 300],
          parameters: {
            functionCode: `
              // Process student progress data
              const students = items[0].json.students;
              const results = [];
              
              for (const student of students) {
                // Calculate progress percentage
                const completedModules = student.progress.filter(p => p.completed).length;
                const totalModules = student.progress.length;
                const progressPercentage = (completedModules / totalModules) * 100;
                
                results.push({
                  studentId: student.id,
                  name: student.name,
                  email: student.email,
                  progressPercentage,
                  needsReminder: progressPercentage < 30 // Flag students with low progress
                });
              }
              
              return results;
            `,
          },
        },
        {
          id: 'FilterLowProgress',
          type: 'n8n-nodes-base.if',
          position: [700, 300],
          parameters: {
            conditions: [
              {
                value1: '={{$json.needsReminder}}',
                operation: 'equals',
                value2: true,
              },
            ],
          },
        },
        {
          id: 'SendReminder',
          type: 'n8n-nodes-base.httpRequest',
          position: [900, 200],
          parameters: {
            url: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/notifications/email`,
            method: 'POST',
            bodyParameters: {
              parameters: [
                {
                  name: 'to',
                  value: '={{$json.email}}',
                },
                {
                  name: 'subject',
                  value: 'Course Progress Reminder',
                },
                {
                  name: 'body',
                  value: `=Dear {{$json.name}},\n\nWe noticed you've completed only {{$json.progressPercentage}}% of your course. Let's keep going!\n\nEduAutomation Team`,
                },
              ],
            },
          },
        },
      ],
      connections: {
        Schedule: {
          main: [
            [
              {
                node: 'FetchStudentProgress',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
        FetchStudentProgress: {
          main: [
            [
              {
                node: 'ProcessProgress',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
        ProcessProgress: {
          main: [
            [
              {
                node: 'FilterLowProgress',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
        FilterLowProgress: {
          true: [
            [
              {
                node: 'SendReminder',
                type: 'main',
                index: 0,
              },
            ],
          ],
        },
      },
    };
    
    // Create the workflow in n8n
    const response = await axios.post(`${N8N_URL}/api/v1/workflows`, workflow);
    return response.data.data.id;
  } catch (error) {
    console.error('Error creating progress tracking workflow:', error);
    return null;
  }
};

export default {
  fetchWorkflows,
  fetchWorkflowById,
  executeWorkflow,
  createContentGenerationWorkflow,
  createProgressTrackingWorkflow,
}; 