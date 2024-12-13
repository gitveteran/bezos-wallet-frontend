import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GRAPHQL_ENDPOINTS, APOLLO_OPTIONS } from "./config"; // Import configuration constants

// HTTP Link: Handles GraphQL queries and mutations over HTTP
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINTS.HTTP, // HTTP endpoint from configuration
});

// WebSocket Link: Handles GraphQL subscriptions over WebSockets
const wsLink = new WebSocketLink({
  uri: GRAPHQL_ENDPOINTS.WS, // WebSocket endpoint from configuration
  options: APOLLO_OPTIONS,   // WebSocket options like auto-reconnect
});

// Split Link: Decides whether to use HTTP or WebSocket link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" && // Ensure it's a valid operation
      definition.operation === "subscription"      // Route subscriptions to WebSocket
    );
  },
  wsLink,  // Use WebSocket link for subscriptions
  httpLink // Use HTTP link for queries and mutations
);

// Apollo Client: Combines links and sets up a cache
const client = new ApolloClient({
  link: splitLink,            // Use the split link for dynamic routing
  cache: new InMemoryCache(), // In-memory cache for Apollo Client
});

// Export the Apollo Client instance for use in the app
export default client;
