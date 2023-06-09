import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ChartsPage from './pages/Charts';
import MapsPage from './pages/Maps';
import './styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/maps" element={<MapsPage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;


