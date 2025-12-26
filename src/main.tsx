import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TutorialProvider } from './contexts/TutorialContext';
import { CompletionPage } from './pages/CompletionPage';
import { LandingPage } from './pages/LandingPage';
import { TutorialPage } from './pages/TutorialPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
