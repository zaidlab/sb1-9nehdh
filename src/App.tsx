import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import VideoGrid from './components/VideoGrid/VideoGrid';
import Categories from './components/Categories/Categories';
import StreamsPage from './components/Streams/StreamsPage';
import UploadPage from './components/Upload/UploadPage';

const PageWrapper = ({ children }) => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <div className="pt-20 px-8">
              <Categories />
              <VideoGrid />
            </div>
          </PageWrapper>
        } />
        <Route path="/streams" element={
          <PageWrapper>
            <StreamsPage />
          </PageWrapper>
        } />
        <Route path="/upload" element={
          <PageWrapper>
            <UploadPage />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/5 via-gray-950 to-gray-950">
        <Sidebar />
        <main className="ml-64">
          <Header />
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;