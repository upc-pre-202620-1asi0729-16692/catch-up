/**
 * Production environment configuration for the Angular application.
 *
 * This file contains environment-specific settings that are used during the production phase of the application.
 * It can include variables such as API endpoints, feature flags, and other configuration options that are specific
 * to the production environment.
 */
export const environment = {
  production: true,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProviderSourcesEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_DEVELOPMENT_API_KEY', // Replace with your actual development API key
  logoProviderApiBaseUrl: 'https://img.logo.dev/',
  logoProviderPublishableKey: 'YOUR_DEVELOPMENT_LOGO_API_KEY', // Replace with your actual development logo API key
};
