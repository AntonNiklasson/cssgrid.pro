import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { TutorialProvider } from './contexts/TutorialContext';
import { LandingPage } from './pages/LandingPage';
import { TutorialPage } from './pages/TutorialPage';
import { CompletionPage } from './pages/CompletionPage';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TutorialProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/learn/:lessonId" element={<TutorialPage />} />
            <Route path="/complete" element={<CompletionPage />} />
            {/* Legacy routes for backwards compatibility */}
            <Route path="/challenge/:id" element={<TutorialPage />} />
            <Route path="/theend" element={<CompletionPage />} />
          </Routes>
        </BrowserRouter>
      </TutorialProvider>
    </ThemeProvider>
  </React.StrictMode>
);
