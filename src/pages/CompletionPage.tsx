import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function CompletionPage() {
  const navigate = useNavigate();

  const skills = [
    'display: grid',
    'grid-template-columns',
    'grid-template-rows',
    'fr units',
    'gap property',
    'grid-column',
    'grid-row',
    'grid-template-areas',
    'grid-area',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
      <div className="text-7xl mb-6">🎓</div>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
        Congratulations!
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-[500px] leading-relaxed">
        You've completed the CSS Grid tutorial! You now have the skills to create
        powerful, flexible layouts for your web projects.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-12 max-w-[600px]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 text-[var(--color-success)] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5"
          >
            <span>✓</span>
            {skill}
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <Button variant="ghost" onClick={() => navigate('/learn/0')}>
          Start Over
        </Button>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    </div>
  );
}
