import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { getTotalLessons } from '../data/tutorial';

export function LandingPage() {
  const navigate = useNavigate();
  const totalLessons = getTotalLessons();

  const startTutorial = () => {
    navigate('/learn/0');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="text-center max-w-[700px] mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
          CSSGrid.pro
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-normal">An Interactive CSS Grid Tutorial</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          Master CSS Grid through hands-on practice. Learn by doing, not just reading. Each lesson
          builds on the last, taking you from beginner to confident in no time.
        </p>

        <div className="flex gap-12 justify-center mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-accent)] mb-1">{totalLessons}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-accent)] mb-1">~15</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Minutes</div>
          </div>
        </div>

        <Button size="lg" onClick={startTutorial}>
          Start Learning
        </Button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-[800px] w-full mb-12">
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">📖</div>
          <h3 className="text-base font-semibold mb-2 text-white">Learn by Doing</h3>
          <p className="text-sm text-gray-400 leading-normal">
            Interactive exercises with live previews
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-base font-semibold mb-2 text-white">Step by Step</h3>
          <p className="text-sm text-gray-400 leading-normal">
            Progressive lessons that build on each other
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="text-base font-semibold mb-2 text-white">Hints When Stuck</h3>
          <p className="text-sm text-gray-400 leading-normal">
            Get help without spoiling the answer
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">✨</div>
          <h3 className="text-base font-semibold mb-2 text-white">Real Examples</h3>
          <p className="text-sm text-gray-400 leading-normal">
            Practical layouts you'll use in real projects
          </p>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Made with ❤️ for the web development community</p>
      </footer>
    </div>
  );
}
