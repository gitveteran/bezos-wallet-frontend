// Base URL for the GraphQL server
const BASE_URL = "localhost:3000"; // Replace with your server URL or use an environment variable

// Construct the HTTP endpoint for GraphQL queries and mutations
const GRAPHQL_HTTP_URI = `http://${BASE_URL}/graphql`;

// Construct the WebSocket endpoint for GraphQL subscriptions
const GRAPHQL_WS_URI = `ws://${BASE_URL}/graphql`;

// Export the GraphQL endpoints for use across the app
export const GRAPHQL_ENDPOINTS = {
  HTTP: GRAPHQL_HTTP_URI, // HTTP endpoint for queries and mutations
  WS: GRAPHQL_WS_URI,     // WebSocket endpoint for subscriptions
};

// Options for the WebSocket connection (used for subscriptions)
export const APOLLO_OPTIONS = {
  reconnect: true, // Automatically attempt to reconnect if the connection is lost
};
