import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Page from './containers/Page';

// Initialize MUI in dark mode by default
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Setup react-query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
