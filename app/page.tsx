'use client';

import Link from 'next/link';
import { Button } from '@/components/Button';
import { getTotalLessons } from '@/data/tutorial';

export default function LandingPage() {
  const totalLessons = getTotalLessons();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-[640px] mb-20">
        <h1 className="text-5xl font-bold mb-5 text-gray-900">CSSGrid.pro</h1>
        <p className="text-xl text-gray-500 mb-6 font-normal">An Interactive CSS Grid Tutorial</p>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Master CSS Grid through hands-on practice. Learn by doing, not just reading. Each lesson
          builds on the last, taking you from beginner to confident in no time.
        </p>

        <div className="flex gap-16 justify-center mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-1">
              {totalLessons}
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-1">~15</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Minutes</div>
          </div>
        </div>

        <Link href="/learn/0">
          <Button size="lg">Start Learning</Button>
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 max-w-[900px] w-full mb-12">
        <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">📖</div>
          <h3 className="text-base font-semibold mb-2 text-gray-900">Learn by Doing</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Interactive exercises with live previews
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-base font-semibold mb-2 text-gray-900">Step by Step</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Progressive lessons that build on each other
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-base font-semibold mb-2 text-gray-900">Hints When Stuck</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Get help without spoiling the answer
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-base font-semibold mb-2 text-gray-900">Real Examples</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Practical layouts you'll use in real projects
          </p>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>Made with ❤️ for the web development community</p>
      </footer>
    </div>
  );
}
