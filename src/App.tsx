import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

import HomePage from 'pages/HomePage';

import './App.scss';

const App = () => {
  const routes = useRoutes([{ path: '/', element: <HomePage /> }]);

  return routes;
};

const AppWrapper = () => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ChakraProvider>
    </Router>
  );
};

export default AppWrapper;
